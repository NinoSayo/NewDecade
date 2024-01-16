using Microsoft.EntityFrameworkCore;

namespace NewDecade.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> o) : base(o) { }

        DbSet
    }
}
