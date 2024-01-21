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
        public DbSet<Users> Users { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BlogPost>().HasData(
               new BlogPost
               {
                   BlogPostId = 1,
                   Title = "First Blog Post",
                   Content = "This is the content of the first blog post.",
                   Author = "John Doe",
                   DatePublished = DateTime.UtcNow.AddDays(-7), // Published 7 days ago
               },
               new BlogPost
               {
                   BlogPostId = 2,
                   Title = "Second Blog Post",
                   Content = "This is the content of the second blog post.",
                   Author = "Jane Doe",
                   DatePublished = DateTime.UtcNow.AddDays(-5), // Published 5 days ago
               });

            modelBuilder.Entity<Comment>().HasData(
                new Comment
                {
                    CommentId = 1,
                    CommenterName = "Alice",
                    CommentContent = "This is a great post!",
                    DateCommented = DateTime.UtcNow.AddDays(-3), // Commented 3 days ago
                    BlogPostId = 1, // Replace with an existing BlogPostId from your BlogPosts table
                    UserId = 1,
                },
                 new Comment
                 {
                     CommentId = 2,
                     CommenterName = "Bob",
                     CommentContent = "Nice work!",
                     DateCommented = DateTime.UtcNow.AddDays(-2), // Commented 2 days ago
                     BlogPostId = 2, // Replace with an existing BlogPostId from your BlogPosts table
                     UserId = 2,
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
