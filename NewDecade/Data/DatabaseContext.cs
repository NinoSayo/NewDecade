        using Microsoft.EntityFrameworkCore;
        using NewDecade.Models;

        namespace NewDecade.Data
        {
            public class DatabaseContext : DbContext
            {
                public DatabaseContext(DbContextOptions options): base(options)
                {

                }
                public DbSet<BlogPost> BlogPosts { get; set; }
                public DbSet<User> Users { get; set; }
                public DbSet<Contact> Contacts { get; set; }

                protected override void OnModelCreating(ModelBuilder modelBuilder)
                {
                    base.OnModelCreating(modelBuilder);

                     modelBuilder.Entity<User>(u =>
                    {
                        u.Property("UserId").ValueGeneratedOnAdd().UseIdentityColumn();
                        u.HasKey("UserId");
                        u.HasData(new User[]
                        {
                            new User {UserId = 1, UserName="Admin", FullName="Online Laundry", Email="onlineLaundry@gmail.com", Address="HCM", Password=BCrypt.Net.BCrypt.HashPassword("123@123"), RegisterTime=DateTime.Now, Role="Admin", Phone="0123456789"}
                        });
                    });

                    modelBuilder.Entity<BlogPost>().HasData(
                       new BlogPost
                       {
                           BlogPostId = 1,
                           Title = "First Blog Post",
                           Content = "This is the content of the first blog post.",
                           Author = "John Doe",
                           DatePublished = DateTime.UtcNow.AddDays(-7), // Published 7 days ago
                           ImageUrl = "sample.jpg"
                       },
                       new BlogPost
                       {
                           BlogPostId = 2,
                           Title = "Second Blog Post",
                           Content = "This is the content of the second blog post.",
                           Author = "Jane Doe",
                           DatePublished = DateTime.UtcNow.AddDays(-5), // Published 5 days ago
                           ImageUrl = "sample.jpg"
                       });

                    modelBuilder.Entity<Users>().HasData(
                       new Users
                       {
                           UserId = 1,
                           Username = "admin",
                           Password = "adminpassword", // You should hash passwords in a real application
                           Role = "Admin",
                           FirstName = "Admin",
                           LastName = "User",
                           Email = "admin@example.com",
                           PhoneNumber = "123-456-7890",
                           Address = "123 Admin Street",
                           RegistrationDate = DateTime.UtcNow.AddMonths(-3), // Registered 3 months ago
                       },
                       new Users
                       {
                           UserId = 2,
                           Username = "customer",
                           Password = "customerpassword", // You should hash passwords in a real application
                           Role = "Customer",
                           FirstName = "John",
                           LastName = "Doe",
                           Email = "john@example.com",
                           PhoneNumber = "987-654-3210",
                           Address = "456 Customer Street",
                           RegistrationDate = DateTime.UtcNow.AddMonths(-2), // Registered 2 months ago
                       });
                }
            }
        }
