using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
    public class Customers
    {
        [Key]
        public int CustomerID { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        public string CustomerName { get; set; }

        public List<Order> OrderHistory { get; set; } = new List<Order>();
        public List<Invoice> InvoiceHistory { get; set; } = new List<Invoice>();

        public string PreferredPackage { get; set; }
        public string MembershipLevel { get; set; }
        public string PreferredPaymentMethod { get; set; }
        public string SpecialRequests { get; set; }
    }
}
