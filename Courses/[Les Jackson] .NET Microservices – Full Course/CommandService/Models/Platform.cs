using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace CommandService.Models;

public class Platform
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required]
    public int ExternalId { get; set; }
    
    [Required]
    public string Name { get; set; } = null!;

    public ICollection<Command> Commands { get; set; } = [];
}