using CommandService.Models;

namespace CommandService.Data;

public interface ICommandRepo
{
    bool SaveChanges();

    // Platforms
    IEnumerable<Platform> GetAllPlatforms();
    void CreatePlatform(Platform plat);
    bool PlatformExists(int platId);
    bool ExternalPlatformExists(int externalPlatId);
    
    // Commands
    IEnumerable<Command> GetCommandsForPlatform(int platId);
    Command? GetCommand(int platId, int commandId);
    void CreateCommand(int platformId, Command command);
}