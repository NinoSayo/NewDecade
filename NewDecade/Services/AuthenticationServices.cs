using System.IdentityModel.Tokens.Jwt;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NewDecade.Data;
using NewDecade.DTO;
using NewDecade.IRepository;
using NewDecade.IServices;
using NewDecade.Model;

namespace NewDecade.Services
{
    public class AuthenticationServices : IAuthenticationServices
    {
        private readonly DatabaseContext _db;
        private readonly IConfiguration _configuration;
        private readonly MailServices _mail;
        private readonly IUserRepository _userRepository;
        public AuthenticationServices(DatabaseContext db, IConfiguration configuration, MailServices mail, IUserRepository userRepository)
        {
            _db = db;
            _configuration = configuration;
            _mail = mail;
            _userRepository = userRepository;
        }
        //Phương thức xác thực
        public async Task<Users> Authenticate(UserLogin userLogin)
        {
            try
            {
                var currentUser = await _db.Users.SingleOrDefaultAsync(u => u.Email == userLogin.Email.ToLower());

                if (currentUser != null && BCrypt.Net.BCrypt.Verify(userLogin.Password, currentUser.Password))
                {
                    return currentUser;
                }
                else
                {
                    throw new AuthenticationException("Invalid email or password.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error authenticating user: {ex.Message}");
                return null;
            }
        }

        private string GenerateCode()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            var code = new string(Enumerable.Repeat(chars, 8).Select(s => s[random.Next(s.Length)]).ToArray());

            return code;
        }

        public async Task<string> CreateUser(UserDTOs.UserDTO users)
        {
            try
            {
                bool isEmailUnique = await IsEmailUnique(users.Email);
                if (!isEmailUnique)
                {
                    return "Email is already in use";
                }
                string hashedPassword = BCrypt.Net.BCrypt.HashPassword(users.Password);
                string code = GenerateCode();
                var newUser = new Users
                {
                    Email = users.Email,
                    Password = hashedPassword,
                    FirstName = users.FirstName,
                    LastName = users.LastName,
                    Address = users.Address,
                    City = users.City,
                    Phone = users.Phone,
                    Role = "User",
                    Birthday = users.Birthday,
                    Avatar = users.Avatar,
                    CreateAt = DateTime.Now,
                    VerificationCode = code,
                    Expiry = DateTime.Now,
                    isVerified = false
                };



                _db.Users.Add(newUser);

                await _db.SaveChangesAsync();

                await _mail.SendVerificationEmail(newUser.Email, newUser.VerificationCode);

                return "User created successfully";
            }
            catch (Exception ex)
            {
                return $"Error creating user: {ex.InnerException}";
            }
        }

        public async Task<bool> VerifyEmail(string email, string code)
        {
            try
            {
                var user = await _userRepository.GetUserByEmail(email);

                if (user != null && user.VerificationCode == code)
                {
                    if (user.Expiry >= DateTime.UtcNow)
                    {
                        user.isVerified = true;
                        user.VerificationCode = "verified";
                        user.Expiry = DateTime.MinValue;
                        await _userRepository.SaveChangeAsync();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error verifying email: {ex.Message}");
                return false;
            }
        }

        public async Task<string> GenerateToken(Users users)
        {
            try
            {
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var credential = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var claims = new[]
                {
                    new Claim("UserId",users.UserId.ToString()),
                    new Claim(ClaimTypes.Role,users.Role),
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Issuer = _configuration["Jwt:Issuser"],
                    Audience = _configuration["Jwt:Audience"],
                    Subject = new ClaimsIdentity(claims),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = credential,
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
            catch
            {
                return null;
            }
        }

        private async Task<bool> IsEmailUnique(string email)
        {
            return await _db.Users.AllAsync(u => u.Email == email);
        }

        private async Task<bool> IsPhoneUnique(string phone)
        {
            return await _db.Users.AllAsync(u => u.Phone == phone);
        }

    }
}
