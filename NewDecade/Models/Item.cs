using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Item
	{
        [Key]
        public int ItemID { get; set; }

        [Required]
        [StringLength(50)]
        public string ItemType { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal UnitPrice { get; set; }

        [NotMapped] // Not stored in the database, computed property
        public decimal TotalPrice => Quantity * UnitPrice;

        [Required]
        [StringLength(50)]
        public string Status { get; set; }
    }
}

