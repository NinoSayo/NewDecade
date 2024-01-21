using System;
using Microsoft.EntityFrameworkCore;
using NewDecade.Data;
using NewDecade.IRepositories;
using NewDecade.Models;

namespace NewDecade.Repositories.Blog
{
	public class CommentRepository : ICommentRepository
	{
        private readonly DatabaseContext db;

        public CommentRepository(DatabaseContext db)
        {
            db = db;
        }

        public async Task<IEnumerable<Comment>> GetAllComments()
        {
            try
            {
                var comment =  await db.Comments.ToListAsync();
                return comment;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in GetAllComments: {ex.Message}");
                throw;
            }
        }

        public async Task<IEnumerable<Comment>> GetCommentsForBlogPost(int blogPostId)
        {
            try
            {
                return await db.Comments.Where(c => c.BlogPostId == blogPostId).ToListAsync();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in GetCommentsForBlogPost: {ex.Message}");
                throw;
            }
        }

        public async Task<Comment> GetCommentById(int commentId)
        {
            try
            {
                return await db.Comments.FindAsync(commentId);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in GetCommentById: {ex.Message}");
                throw;
            }
        }

        public async Task<int> AddComment(Comment comment)
        {
            try
            {
                db.Comments.Add(comment);
                return await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in AddComment: {ex.Message}");
                throw;
            }
        }

        public async Task<int> UpdateComment(Comment comment)
        {
            try
            {
                db.Entry(comment).State = EntityState.Modified;
                return await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in UpdateComment: {ex.Message}");
                throw;
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
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in DeleteComment: {ex.Message}");
                throw;
            }
        }
    }
}

