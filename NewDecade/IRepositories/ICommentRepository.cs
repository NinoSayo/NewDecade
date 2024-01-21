using System;
using NewDecade.Models;

namespace NewDecade.IRepositories
{
	public interface ICommentRepository
	{
        Task<IEnumerable<Comment>> GetAllComments();
        Task<IEnumerable<Comment>> GetCommentsForBlogPost(int blogPostId);
        Task<Comment> GetCommentById(int commentId);
        Task<Comment> AddComment(Comment comment);
        Task<int> UpdateComment(Comment comment);
        Task<int> DeleteComment(int commentId);
    }
}

