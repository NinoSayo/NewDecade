using NewDecade.Model;

namespace NewDecade.IServices
{
    public interface IAuthenticationServices
    {
        Task<Users> Authenticate(UserLogin userLogin);
        Task<string> CreateUser(Users users);

        Task<string> GenerateToken(Users users);
    }
}
