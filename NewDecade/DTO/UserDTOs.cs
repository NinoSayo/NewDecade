namespace NewDecade.DTO
{
    public class UserDTOs
    {
        public class UserDTO
        {
            public string Email { get; set; }
            public string Password { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            public string Phone { get; set; }
            public DateTime Birthday { get; set; }
            public string? Avatar { get; set; }
            public string Role { get; set; } = "User";
            public bool isVerified { get; set; } = false;
        }
    }
}
