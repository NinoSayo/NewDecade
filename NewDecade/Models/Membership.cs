using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
    public class Membership
    {
        [Key]
        public int MembershipId { get; set; }
        public string MembershipName { get; set; }
        public int DurationInMonths { get; set; }
        public decimal Price { get; set; }
    }
}
