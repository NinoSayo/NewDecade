namespace NewDecade.DTOs
{
    public class UserDTOs
    {
        public class UserDTO
        {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public int Age { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Address { get; set; }
            public bool Role { get; set; }
            public bool Status { get; set; }
        }

        public class RegisterDTO
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public int Age { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Address { get; set; }
            public string Password { get; set; }
        }

        public class LoginDTO 
        { 
            public string Username { get; set; }
            public string Password { get; set; }
        }

        public class LoginResponseDTO
        {
            public string Username { get; set; }
            public UserDTO User { get; set; }
        }
    }
}
