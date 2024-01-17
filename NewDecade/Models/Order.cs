using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Order
	{
        [Key]
        public int OrderID { get; set; }

        [ForeignKey("Customer")]
        public int CustomerID { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }

        [Required]
        public DateTime DeliveryDate { get; set; }

        [Required]
        [StringLength(50)]
        public string Status { get; set; } // Processing, Shipped, Delivered

        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal TotalAmount { get; set; }

        [StringLength(50)]
        public string PaymentStatus { get; set; }

        [Required]
        public List<Item> Items { get; set; } = new List<Item>(); // List of items in the order
    }

}


