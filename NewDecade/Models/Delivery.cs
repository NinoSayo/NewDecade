using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Delivery
	{
        [Key]
        public int DeliveryID { get; set; }

        [ForeignKey("Order")]
        public int OrderID { get; set; }

        [Required]
        public DateTime DeliveryDate { get; set; }

        [Required]
        public string Status { get; set; } // Ready, Pending, Delivered

        public decimal RemainingPayment { get; set; }
        public string PaymentStatus { get; set; }
    }
}

