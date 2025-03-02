using System.Text.Json;
using AutoMapper;
using CommandService.Data;
using CommandService.Dtos;
using CommandService.Models;

namespace CommandService.EventProcessing;

public class EventProcessor(
    IServiceScopeFactory scopeFactory,
    IMapper mapper) : IEventProcessor
{
    public void ProcessEvent(string message)
    {
        EventType eventType = DetermineEvent(message);

        switch (eventType)
        {
            case EventType.PlatformPublished:
                AddPlatform(message);
                break;

            case EventType.Undetermined:
            default:
                break;
        }
    }

    private EventType DetermineEvent(string notificationMessage)
    {
        Console.WriteLine("--> Determing Event");
        GenericEventDto? eventType = JsonSerializer.Deserialize<GenericEventDto>(notificationMessage);

        switch (eventType?.Event)
        {
            case "Platform_Published":
                Console.WriteLine("--> Platform Published Event Detected");
                return EventType.PlatformPublished;

            default:
                Console.WriteLine("--> Could not determine the event type");
                return EventType.Undetermined;
        }
    }

    private void AddPlatform(string platformPublishedMessage)
    {
        using IServiceScope scope = scopeFactory.CreateScope();

        ICommandRepo repo = scope.ServiceProvider.GetRequiredService<ICommandRepo>();
        PlatformPublishedDto? platformPublishedDto =
            JsonSerializer.Deserialize<PlatformPublishedDto>(platformPublishedMessage);

        try
        {
            Platform plat = mapper.Map<Platform>(platformPublishedDto);
            if (!repo.ExternalPlatformExists(plat.ExternalId))
            {
                repo.CreatePlatform(plat);
                repo.SaveChanges();
                Console.WriteLine("--> Platform added!");
            }
            else
            {
                Console.WriteLine("--> The platform already exists ...");
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"--> Could not add Platform to DB {e.Message}");
            throw;
        }
    }
}

public enum EventType
{
    PlatformPublished,
    Undetermined
}