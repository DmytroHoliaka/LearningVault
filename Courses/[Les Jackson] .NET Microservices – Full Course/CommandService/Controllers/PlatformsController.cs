using AutoMapper;
using CommandService.Data;
using CommandService.Dtos;
using CommandService.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommandService.Controllers;

[ApiController]
[Route("api/c/[controller]")]
public class PlatformsController(
    ICommandRepo repository,
    IMapper mapper) : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<PlatformReadDto>> GetPlatforms()
    {
        Console.WriteLine("--> Getting Platforms from CommandService");
        
        IEnumerable<Platform> platformItems = repository.GetAllPlatforms();
        return Ok(mapper.Map<IEnumerable<PlatformReadDto>>(platformItems));
    }

    [HttpPost]
    public ActionResult TestInboundConnection()
    {
        Console.WriteLine("--> Inbound POST # Command Service");
        return Ok("Inbound test of from Platforms Controller");
    }
}