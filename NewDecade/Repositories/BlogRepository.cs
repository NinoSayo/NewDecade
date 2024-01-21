using System;
using Microsoft.EntityFrameworkCore;
using NewDecade.Data;
using NewDecade.IRepositories;
using NewDecade.Models;

namespace NewDecade.Repositories
{
	public class BlogRepository : IBlogRepository
	{
        private readonly DatabaseContext db;

        public BlogRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task<BlogPost> AddBlogPost(BlogPost blogPost)
        {
            try
            {
                db.BlogPosts.Add(blogPost);
                var result =  await db.SaveChangesAsync();
                if(result == 1)
                {
                    return blogPost;
                }
                return null;
            }
            catch(Exception)
            {
                return null;
            }
        }

        public async Task<BlogPost> DeleteBlogPost(int blogPostId)
        {
            var blog = await GetBlogPostById(blogPostId);
            if(blog == null)
            {
                return null;
            }
            else
            {
                try
                {
                    db.BlogPosts.Remove(blog);
                    var result = await db.SaveChangesAsync();
                    if(result == 1)
                    {
                        return blog;
                    }
                    return null;
                }
                catch
                {
                    return null;
                }
            }
        }
       

        public async Task<IEnumerable<BlogPost>> GetAllBlogPosts()
        {
            try
            {
                var list = await db.BlogPosts.ToListAsync();
                return list;
            }
            catch
            {
                return null;
            }
            
        }

        public async Task<BlogPost> GetBlogPostById(int postId)
        {
            try
            {
                var blog = await db.BlogPosts.SingleOrDefaultAsync(b => b.BlogPostId == postId);
                return blog;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<BlogPost> UpdateBlogPost(BlogPost blogPost)
        {
            try
            {
                var oldBlog = await GetBlogPostById(blogPost.BlogPostId);
                if (oldBlog == null)
                {
                    return null;
                }
                oldBlog.Title = blogPost.Title;
                oldBlog.Content = blogPost.Content;
                oldBlog.Author = blogPost.Author;

                var result = await db.SaveChangesAsync();
                if (result == 1)
                {
                    return oldBlog;
                }
                return null;
            }
            catch { return null; }
        }

        public async Task<Comment> GetCommentById(int commentId)
        {
            try
            {
                var comment = await db.Comments.SingleOrDefaultAsync(c => c.CommentId == commentId);
                return comment;
            }
            catch (Exception)
            {
                return null;
            }   
        }

        public async Task<IEnumerable<Comment>> GetCommentsForBlogPost(int blogPostId)
        {
            try
            {
                var comments = await db.Comments.Where(c => c.BlogPostId == blogPostId).ToListAsync();
                return comments;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<int> UpdateComment(Comment comment)
        {
            try
            {
                var existingComment = await db.Comments.FindAsync(comment.CommentId);
                if (existingComment == null)
                {
                    return 0; // Hoặc bạn có thể ném một ngoại lệ tùy thuộc vào yêu cầu
                }

                existingComment.CommenterName = comment.CommenterName;
                existingComment.CommentContent = comment.CommentContent;

                return await db.SaveChangesAsync();
            }
            catch
            {
                return 0;
            }
        }

        public async Task<Comment> AddComment(Comment comment)
        {
            try
            {
                db.Comments.Add(comment);
                await db.SaveChangesAsync();
                return comment; // Trả về comment đã được thêm thành công
            }
            catch
            {
                return null;
            }
        }

        public async Task<int> DeleteComment(int commentId)
        {
            try
            {
                var comment = await db.Comments.FindAsync(commentId);
                if (comment == null)
                {
                    return 0;
                }

                db.Comments.Remove(comment);
                return await db.SaveChangesAsync();
            }
            catch
            {
                return 0;
            }
        }
    }
}

