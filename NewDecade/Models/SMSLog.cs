using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class SMSLog
	{
        [Key]
        public int SMSLogID { get; set; }

        [ForeignKey("Customer")]
        public int CustomerID { get; set; }

        [Required]
        public string MessageType { get; set; }

        [Required]
        public string MessageContent { get; set; }

        [Required]
        public DateTime SendDate { get; set; }

        [Required]
        public string Status { get; set; }
    }
}

