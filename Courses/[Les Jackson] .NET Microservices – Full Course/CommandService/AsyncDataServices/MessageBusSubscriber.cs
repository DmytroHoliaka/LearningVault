using System.Text;
using AutoMapper;
using CommandService.EventProcessing;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace CommandService.AsyncDataServices;

public class MessageBusSubscriber : BackgroundService
{
    private readonly IConfiguration _configuration;
    private readonly IEventProcessor _eventProcess;
    private IConnection _connection;
    private IModel _channel;
    private string _queueName;

    public MessageBusSubscriber(IConfiguration configuration, IEventProcessor eventProcess)
    {
        _configuration = configuration;
        _eventProcess = eventProcess;
        InitializeRabbitMQ();
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        stoppingToken.ThrowIfCancellationRequested();

        EventingBasicConsumer consumer = new(_channel);

        consumer.Received += (_, ea) =>
        {
            Console.WriteLine("--> Event Received!");
            ReadOnlyMemory<byte> body = ea.Body;
            string notificationMessage = Encoding.UTF8.GetString(body.ToArray());

            _eventProcess.ProcessEvent(notificationMessage);
        };

        _channel.BasicConsume(queue: _queueName, autoAck: true, consumer: consumer);

        return Task.CompletedTask;
    }

    private void InitializeRabbitMQ()
    {
        ConnectionFactory factory = new()
        {
            HostName = _configuration["RabbitMQHost"]!,
            Port = int.Parse(_configuration["RabbitMQPort"]!),
        };

        _connection = factory.CreateConnection();
        _channel = _connection.CreateModel();
        _channel.ExchangeDeclare(exchange: "trigger", type: ExchangeType.Fanout);
        _queueName = _channel.QueueDeclare().QueueName;
        _channel.QueueBind(queue: _queueName, exchange: "trigger", routingKey: "");

        Console.WriteLine("--> Listening on the Message Bus...");

        _connection.ConnectionShutdown += RabbitMQ_ConnectionShutdown;
    }

    private void RabbitMQ_ConnectionShutdown(object? sender, ShutdownEventArgs e)
    {
        Console.WriteLine("--> Connection Shutdown");
    }

    public override void Dispose()
    {
        if (_channel.IsOpen)
        {
            _channel.Close();
            _connection.Close();
        }

        base.Dispose();
    }
}