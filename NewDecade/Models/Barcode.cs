using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Barcode
	{
        [Key]
        public int BarcodeID { get; set; }

        [ForeignKey("Item")]
        public int ItemID { get; set; }

        [Required]
        public string BarcodeValue { get; set; }

        [Required]
        public DateTime PrintingDate { get; set; }

        [Required]
        public string PrintedBy { get; set; }
    }
}

