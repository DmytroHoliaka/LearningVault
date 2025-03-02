using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PlatformService.AsyncDataServices;
using PlatformService.Data;
using PlatformService.Dtos;
using PlatformService.Models;
using PlatformService.SyncDataServices.Http;

namespace PlatformService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlatformsController(
    IPlatformRepo repository,
    IMapper mapper,
    ICommandDataClient commandDataClient,
    IMessageBusClient messageBusClient) : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<PlatformReadDto>> GetPlatforms()
    {
        Console.WriteLine("GetPlatforms is being executed ...");
        IEnumerable<Platform> platformItems = repository.GetAllPlatforms();

        return Ok(mapper.Map<IEnumerable<PlatformReadDto>>(platformItems));
    }

    [HttpGet("{id:int}", Name = "GetPlatformById")]
    public ActionResult<PlatformReadDto> GetPlatformById(int id)
    {
        Platform? platformItem = repository.GetPlatformById(id);

        if (platformItem is null)
        {
            return NotFound();
        }

        return Ok(mapper.Map<PlatformReadDto>(platformItem));
    }

    [HttpPost]
    public async Task<ActionResult<PlatformReadDto>> CreatePlatform(
        PlatformCreateDto platformCreateDto)
    {
        Platform platformItem = mapper.Map<Platform>(platformCreateDto);
        repository.CreatePlatform(platformItem);
        repository.SaveChanges();

        PlatformReadDto platformReadDto = mapper.Map<PlatformReadDto>(platformItem);

        // Send sync message
        try
        {
            await commandDataClient.SendPlatformToCommand(platformReadDto);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"--> Could not send synchronously: {ex.Message}");
        }

        // Send async message
        try
        {
            PlatformPublishedDto platformPublishedDto = mapper.Map<PlatformPublishedDto>(platformReadDto);
            platformPublishedDto.Event = "Platform_Published";
            messageBusClient.PublishNewPlatform(platformPublishedDto);
        }
        catch (Exception e)
        {
            Console.WriteLine($"Could not send asynchronously: {e.Message}");
            throw;
        }

        return CreatedAtRoute("GetPlatformById", new { platformItem.Id }, platformReadDto);
    }
}