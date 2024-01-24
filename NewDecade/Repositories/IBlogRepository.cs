using System.Collections.Generic;
using System.Threading.Tasks;
using NewDecade.Models;

namespace NewDecade.IRepositories
{
    public interface IBlogRepository
    {
    Task<IEnumerable<BlogPost>> GetAllBlogPosts();
    Task<BlogPost> GetBlogPostById(int blogPostId);
    Task<int> AddBlogPost(BlogPost blogPost);
    Task<int> UpdateBlogPost(BlogPost blogPost);
    Task<int> DeleteBlogPost(int blogPostId);
    }
}
