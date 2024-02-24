using NewDecade.Model;

namespace NewDecade.IRepository
{
    public interface IUserRepository
    {
        Task<Users> GetUserByEmail(string email);
        Task<Users> GetUserById(int id);
        Task SaveChangeAsync();
    }
}
