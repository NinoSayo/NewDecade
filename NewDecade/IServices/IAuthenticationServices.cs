using NewDecade.DTO;
using NewDecade.Model;

namespace NewDecade.IServices
{
    public interface IAuthenticationServices
    {
        Task<Users> Authenticate(UserLogin userLogin);
        Task<string> CreateUser(UserDTOs.UserDTO user);
        Task<bool> VerifyEmail(string email, string code);
        Task<string> GenerateToken(Users users);
    }
}
