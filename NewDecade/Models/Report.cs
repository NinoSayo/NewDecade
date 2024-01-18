using System;
using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
	public class Report
	{
        [Key]
        public int ReportID { get; set; }

        [Required]
        public string ReportType { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime DateGenerated { get; set; }
    }
}

