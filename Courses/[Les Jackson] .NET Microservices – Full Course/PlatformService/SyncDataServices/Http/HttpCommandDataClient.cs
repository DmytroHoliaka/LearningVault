using System.Text;
using System.Text.Json;
using PlatformService.Dtos;

namespace PlatformService.SyncDataServices.Http;

public class HttpCommandDataClient(
    HttpClient httpClient,
    IConfiguration configuration) : ICommandDataClient
{
    public async Task SendPlatformToCommand(PlatformReadDto plat)
    {
        StringContent httpContent = new(
            JsonSerializer.Serialize(plat),
            Encoding.UTF8,
            "application/json"
        );

        HttpResponseMessage response = await httpClient.PostAsync(
            $"{configuration["CommandService"]}",
            httpContent);

        Console.WriteLine(response.IsSuccessStatusCode
            ? "--> Sync POST to CommandService was OK!"
            : "--> Sync POST to CommandService was NOT OK!");
    }
}