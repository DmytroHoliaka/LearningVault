using CommandService.Models;
using CommandService.SyncDataServices.Grpc;

namespace CommandService.Data;

public static class PrepDb
{
    public static void PrepPopulation(IApplicationBuilder builder)
    {
        using (IServiceScope serviceScope = builder.ApplicationServices.CreateScope())
        {
            IPlatformDataClient grpcClient = serviceScope.ServiceProvider.GetRequiredService<IPlatformDataClient>();
            IEnumerable<Platform>? platforms = grpcClient.ReturnAllPlatforms();

            if (platforms is null)
            {
                return;
            }
            
            SeedData(serviceScope.ServiceProvider.GetRequiredService<ICommandRepo>(), platforms);
        }
    }

    private static void SeedData(ICommandRepo repo, IEnumerable<Platform> platforms)
    {
        Console.WriteLine("--> Seeding new platforms");
        foreach (Platform platform in platforms)
        {
            if (!repo.ExternalPlatformExists(platform.ExternalId))
            {
                repo.CreatePlatform(platform);
            }

            repo.SaveChanges();
        }
    }
}