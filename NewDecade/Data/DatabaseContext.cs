using Microsoft.EntityFrameworkCore;
using NewDecade.Models;

namespace NewDecade.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> o) : base(o) { }

        DbSet<Customers> Customers { get; set; }
        DbSet<Invoice> Invoices { get; set; }
        DbSet<Users> Users { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<Item> Items { get; set; }
        DbSet<Report> Reports { get; set; }
        DbSet<SMSLog> SMSLogs { get; set; }
        DbSet<Barcode> Barcodes { get; set; }
        DbSet<Delivery> Deliveries { get; set; }
        DbSet<DashboardMetrics> DashboardMetrics { get; set; }
    }
}
