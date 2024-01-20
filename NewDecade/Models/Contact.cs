using System;
using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
	public class Contact
	{
        [Key]
        public int ContactId { get; set; }

        [Required(ErrorMessage = "Please provide your name.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Please provide your email address.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please provide a subject.")]
        public string Subject { get; set; }

        [Required(ErrorMessage = "Please provide your message.")]
        public string Message { get; set; }

        public DateTime DateSubmitted { get; set; } = DateTime.UtcNow;
    }
}

