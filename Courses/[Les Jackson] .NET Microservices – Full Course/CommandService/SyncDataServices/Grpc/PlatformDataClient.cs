using AutoMapper;
using CommandService.Models;
using Grpc.Net.Client;
using PlatformService;

namespace CommandService.SyncDataServices.Grpc;

public class PlatformDataClient(
    IConfiguration configuration,
    IMapper mapper) : IPlatformDataClient
{
    public IEnumerable<Platform>? ReturnAllPlatforms()
    {
        Console.WriteLine($"--> Calling GRPC Service {configuration["GrpcPlatform"]}");
        GrpcChannel channel = GrpcChannel.ForAddress(configuration["GrpcPlatform"]!);
        GrpcPlatform.GrpcPlatformClient client = new(channel);
        GetAllRequest request = new();

        try
        {
            PlatformResponse? reply = client.GetAllPlatforms(request);
            return mapper.Map<IEnumerable<Platform>>(reply?.Platform);
        }
        catch (Exception e)
        {
            Console.WriteLine($"--> Could not call GRPC Server: {e.Message}");
            return null;
        }
    }
}