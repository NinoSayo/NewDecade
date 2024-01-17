using System;
using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
	public class DashboardMetrics
	{
        [Key]
        public int MetricID { get; set; }

        [Required]
        public string MetricType { get; set; }

        [Required]
        public string Value { get; set; }

        [Required]
        public DateTime DateCaptured { get; set; }
    }
}

