using System.Collections.Generic;
using System.Threading.Tasks;
using NewDecade.Models;

namespace NewDecade.IRepositories
{
    public interface IBlogRepository
    {
        Task<IEnumerable<BlogPost>> GetAllBlogPosts();
        Task<BlogPost> GetBlogPostById(int id);
        Task<IEnumerable<Comment>> GetCommentsForBlogPost(int blogPostId);
        Task<Comment> GetCommentById(int commentId);
        Task<BlogPost> AddBlogPost(BlogPost blogPost);
        Task<Comment> AddComment(Comment comment);
        Task<BlogPost> UpdateBlogPost(BlogPost blogPost);
        Task<int> UpdateComment(Comment comment);
        Task<BlogPost> DeleteBlogPost(int blogPostId);
        Task<int> DeleteComment(int commentId);

        Task<Users> GetUserById(int userId);
        Task<IEnumerable<Comment>> GetCommentsByUserId(int userId);
    }
}
