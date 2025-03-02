using CommandService.Models;
using Microsoft.EntityFrameworkCore;

namespace CommandService.Data;

public class CommandRepo(
    AppDbContext context) : ICommandRepo
{
    public bool SaveChanges()
    {
        return context.SaveChanges() >= 0;
    }

    public IEnumerable<Platform> GetAllPlatforms()
    {
        return context.Platforms.ToList();
    }

    public void CreatePlatform(Platform plat)
    {
        ArgumentNullException.ThrowIfNull(plat, nameof(plat));

        context.Platforms.Add(plat);
    }

    public bool PlatformExists(int platId)
    {
        return context.Platforms
            .Any(p => p.Id == platId);
    }

    public bool ExternalPlatformExists(int externalPlatId)
    {
        return context.Platforms
            .Any(p => p.ExternalId == externalPlatId);
    }

    public IEnumerable<Command> GetCommandsForPlatform(int platId)
    {
        return context.Commands
            .Include(c => c.Platform)
            .Where(c => c.PlatformId == platId)
            .OrderBy(c => c.Platform.Name);
    }

    public Command? GetCommand(int platId, int commandId)
    {
        return context.Commands
            .FirstOrDefault(c => c.PlatformId == platId && c.Id == commandId);
    }

    public void CreateCommand(int platformId, Command command)
    {
        ArgumentNullException.ThrowIfNull(command, nameof(command));
        command.PlatformId = platformId;
        context.Add(command);
    }
}