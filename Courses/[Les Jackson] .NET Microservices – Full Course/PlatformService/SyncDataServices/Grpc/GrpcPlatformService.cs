using AutoMapper;
using Grpc.Core;
using PlatformService.Data;
using PlatformService.Models;

namespace PlatformService.SyncDataServices.Grpc;

public class GrpcPlatformService(
    IPlatformRepo repository,
    IMapper mapper) : GrpcPlatform.GrpcPlatformBase
{
    public override Task<PlatformResponse> GetAllPlatforms(
        GetAllRequest request, ServerCallContext context)
    {
        PlatformResponse response = new();
        IEnumerable<Platform> platforms = repository.GetAllPlatforms();

        foreach (Platform plat in platforms)
        {
            response.Platform.Add(mapper.Map<GrpcPlatformModel>(plat));
        }

        return Task.FromResult(response);
    }
}