using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NewDecade.Data;
using NewDecade.IServices;
using NewDecade.Model;

namespace NewDecade.Services
{
    public class AuthenticationServices : IAuthenticationServices
    {
        private readonly DatabaseContext _db;
        private readonly IConfiguration _configuration;

        public AuthenticationServices(DatabaseContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }
        //Phương thức xác thực
        public async Task<Users> Authenticate(UserLogin userLogin)
        {
            try
            {
                var currentUser = await _db.Users.SingleOrDefaultAsync(u => u.Email == userLogin.Email);
                if (currentUser != null && BCrypt.Net.BCrypt.Verify(userLogin.Password, currentUser.Password))
                {
                    return currentUser;
                }
                return null;
            }catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<string> CreateUser(Users users)
        {
            bool isEmailUnique = await IsEmailUnique(users.Email);
            if (!isEmailUnique)
            {
                return "Email already existed";
            }
            bool isPhoneUnique = await IsPhoneUnique(users.Phone);
            if (!isPhoneUnique)
            {
                return "Phone number is already in use";
            }

            users.Role = "User";
            users.Password = BCrypt.Net.BCrypt.HashPassword(users.Password);
            users.CreateAt = DateTime.UtcNow;
            users.isVerified = false;
            users.VerificationCode = GenerateRandomCode();
            users.Expiry = DateTime.UtcNow;

            await _db.SaveChangesAsync();
            return "User Created Successfully";
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

        private string GenerateRandomCode()
        {
            Random random = new Random();
            int code = random.Next(100000, 99999);
            return code.ToString();
        }

        private async Task<bool> IsEmailUnique(string email)
        {
            return await _db.Users.AllAsync(u  => u.Email == email);
        }

        private async Task<bool> IsPhoneUnique(string phone)
        {
            return await _db.Users.AllAsync(u => u.Phone == phone);
        }

    }
}
