using AutoMapper;
using CommandService.Data;
using CommandService.Dtos;
using CommandService.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandService.Controllers;

[ApiController]
[Route("api/c/platforms/{platformId:int}/[controller]")]
public class CommandsController(
    ICommandRepo repository,
    IMapper mapper) : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<CommandReadDto>> GetCommandsForPlatform(int platformId)
    {
        Console.WriteLine($"--> Hit GetCommandsForPlatform, platform id: {platformId}");

        if (!repository.PlatformExists(platformId))
        {
            return NotFound();
        }

        IEnumerable<Command> commands = repository.GetCommandsForPlatform(platformId);
        return Ok(mapper.Map<IEnumerable<CommandReadDto>>(commands));
    }

    [HttpGet("{commandId:int}", Name = "GetCommandForPlatform")]
    public ActionResult<CommandReadDto> GetCommandForPlatform(int platformId, int commandId)
    {
        Console.WriteLine($"--> Hit GetCommandForPlatform, platform id: {platformId}, command id: {commandId}");

        if (!repository.PlatformExists(platformId))
        {
            return NotFound();
        }

        Command? commands = repository.GetCommand(platformId, commandId);

        if (commands is null)
        {
            return NotFound();
        }

        return Ok(mapper.Map<CommandReadDto>(commands));
    }

    [HttpPost]
    public ActionResult<CommandReadDto> CreateCommandForPlatform(int platformId, CommandCreateDto commandDto)
    {
        Console.WriteLine($"--> Hit CreateCommandForPlatform, platform id: {platformId}");

        if (!repository.PlatformExists(platformId)) 
        {
            return NotFound();
        }

        Command command = mapper.Map<Command>(commandDto);
        repository.CreateCommand(platformId, command);
        repository.SaveChanges();
        CommandReadDto commandReadDto = mapper.Map<CommandReadDto>(command);

        return CreatedAtRoute(nameof(GetCommandForPlatform), new
        {
            platformId = platformId,
            commandId = commandReadDto.Id
        }, commandReadDto);
    }
}