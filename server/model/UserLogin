using System.ComponentModel.DataAnnotations;

namespace Project3.Models
{
    public class UserLogin
    {
        [Required(ErrorMessage = "Username cannot blank!")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Password cannot blank!")]
        [MinLength(6, ErrorMessage = "Password must have at least 6 characters.")]
        public string Password { get; set; }
    }
}
