using Microsoft.EntityFrameworkCore;
using NewDecade.Models;

namespace NewDecade.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> o) : base(o) { }

        DbSet<Customers> customers;
        DbSet<Invoice> invoices;
        DbSet<Users> users;
    }
}
