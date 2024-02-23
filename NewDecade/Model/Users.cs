namespace NewDecade.Model
{
    public class Users
    {
        public int UserId {  get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public string Address {  get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Role { get; set; }
        public DateTime Birthday { get; set; }
        public string? Avatar { get; set; }
        public DateTime CreateAt { get; set; }
        public string VerificationCode { get; set; }
        public DateTime Expiry { get; set; }
        public bool isVerified { get; set; } = false;
    }
}
