using Microsoft.EntityFrameworkCore;
using NewDecade.Model;

namespace NewDecade.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options) { }

        public DbSet<Users> Users { get; set; }
    }
}
