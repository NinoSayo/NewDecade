using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
    public class UserLogin
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string Tokens {  get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        public User User { get; set; }
    }
}
