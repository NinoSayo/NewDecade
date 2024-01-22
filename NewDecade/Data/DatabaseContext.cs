using Microsoft.EntityFrameworkCore;
using ReactServer.Models;

namespace ReactServer.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>().HasData(new Product[]
            {
                new Product { Id = 1, Name="Giặt theo số lượng", Description="Giá tiền sẽ được tính theo số lượng đồ mà bạn muốn giặt"},
                new Product { Id = 2, Name="Giặt theo trọng lượng", Description="Giá tiền sẽ được tính theo Kg"},
            });
            modelBuilder.Entity<Order>().HasData(new Order[]
            {
                new Order {OrderId = 1, FullName="Nguyen Van A", Address="11 Nguyen Thi Minh Khai", Phone=123123, LaundryType=""},
                new Order {OrderId = 2, FullName="Nguyen Van B", Address="33 Nguyen Thi Minh Khai", Phone=321123, LaundryType=""}
            });

        }
    }
}
