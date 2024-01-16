using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
    public class Users
    {
        [Key]
        public string Id { get; set; } 
        public string Username { get; set; }
        [MaxLength(12)]
        public string Password {  get; set; }
        [MaxLength(12)]
        public int Phone {  get; set; }
    }
}
