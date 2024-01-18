using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
    public class Invoice
    {
        
        [Key]
        public int InvoiceID { get; set; }

        [ForeignKey("CustomerModel")]
        public int CustomerID { get; set; }

        public string CustomerName { get; set; } = string.Empty;
        public string CustomerPhone { get; set; }

        [Required]
        public DateTime InvoiceDate { get; set; }

        [Required]
        public string InvoiceType { get; set; } // Pieces, Weight, Package

        [Required]
        public decimal TotalAmount { get; set; }

        [Required]
        public string Status { get; set; }

        public List<Item> Items { get; set; } = new List<Item>();

    }
}
