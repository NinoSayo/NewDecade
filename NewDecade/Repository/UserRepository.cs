using Microsoft.EntityFrameworkCore;
using NewDecade.Data;
using NewDecade.IRepository;
using NewDecade.Model;

namespace NewDecade.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _dbContext;

        public UserRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Users> GetUserByEmail(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<Users> GetUserById(int id)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(i => i.UserId == id);
        }

        public async Task SaveChangeAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
