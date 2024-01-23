﻿using System;
using System.ComponentModel.DataAnnotations;

namespace NewDecade.Models
{
	public class Users
	{
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; } // Admin, Customer

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public DateTime RegistrationDate { get; set; }

        public List<Comment> Comments { get; set; } = new List<Comment>();
    }
}


