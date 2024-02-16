using Microsoft.EntityFrameworkCore;
using NewDecade.Data;
using NewDecade.DTOs;
using NewDecade.IServices;
using NewDecade.Models;

namespace NewDecade.Services
{
    public class UserServices : IUserServices
    {
        private readonly DatabaseContext _db;
        private readonly Authentication _auth;
        private readonly HashingPassword _hashed;

        public UserServices(DatabaseContext db,Authentication auth,HashingPassword hashed)
        {
            _db = db;
            _auth = auth;
            _hashed = hashed;
        }

        public async Task<UserDTOs.UserDTO> GetUser(int id)
        {
            var user = await _db.Users.SingleOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                return null;
            }

            var userDTO = new UserDTOs.UserDTO
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Age = user.Age,
                Email = user.Email,
                Phone = user.Phone,
                Address = user.Address,
                Role = user.Role,
                Status = user.Status,
            };
            return userDTO;
        }

        public async Task<UserDTOs.LoginResponseDTO> LoginUser(UserDTOs.LoginDTO loginDTO)
        {
            var userLogin = await _db.UsersLogin.FirstOrDefaultAsync(u => u.Username == loginDTO.Username);
            if (userLogin == null)
            {
                return null;
            }

            if (!_auth.Authenticate(loginDTO, userLogin.Password))
            {
                return null;
            }

            var user = await _db.Users.FindAsync(userLogin.UserId);
            if (user == null)
            {
                return null;
            }

            var loginResponseDTO = new UserDTOs.LoginResponseDTO
            {
                Username = loginDTO.Username,
                User = new UserDTOs.UserDTO
                { 
                    Id = user.Id, 
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Age = user.Age,
                    Email = user.Email,
                    Phone = user.Phone,
                    Address = user.Address,
                    Role = user.Role,
                    Status = user.Status,
                }
            };
            return loginResponseDTO;

        }

        public Task<bool> LogoutUser()
        {
            throw new NotImplementedException();
        }

        public async Task<int> RegisterUser(UserDTOs.RegisterDTO registerDTO)
        {
            string hashedPassword = _hashed.HashPassword(registerDTO.Password);

            var user = new User
            {
                FirstName = registerDTO.FirstName,
                LastName = registerDTO.LastName,
                Age = registerDTO.Age,
                Email = registerDTO.Email,
                Phone = registerDTO.Phone,
                Address = registerDTO.Address,
                Role = false,
                Status = true,
            };
            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            var userLogin = new UserLogin
            {
                Username = registerDTO.Email,
                Password = hashedPassword,
                UserId = user.Id,
            };
            _db.UsersLogin.Add(userLogin);
            await _db.SaveChangesAsync();

            return user.Id;
        }
    }
}
