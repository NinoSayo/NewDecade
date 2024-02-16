using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }

        public int Age { get; set; }

        public string Email {  get; set; }

        [Column(TypeName = "nvarchar(13)")]
        public string Phone { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Address {  get; set; }

        public bool Role { get; set; }

        public bool Status {  get; set; }

    }
}
