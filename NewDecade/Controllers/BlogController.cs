using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewDecade.IRepositories;
using NewDecade.Models;
using NewDecade.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IBlogRepository _blogRepo;
        private readonly ICommentRepository _commentRepo;


        public BlogController(IBlogRepository blogRepo, ICommentRepository commentRepo)
        {
            this._blogRepo = blogRepo;
            this._commentRepo = commentRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBlogPosts()
        {
            try
            {
                var blogPosts = await _blogRepo.GetAllBlogPosts();
                return Ok(blogPosts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogPostById(int id)
        {
            try
            {
                var blogPost = await _blogRepo.GetBlogPostById(id);
                if (blogPost == null)
                {
                    return NotFound($"Blog post with id {id} not found");
                }
                return Ok(blogPost);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddBlogPost([FromBody] BlogPost blogPost)
        {
            try
            {
                var addedBlogPost = await _blogRepo.AddBlogPost(blogPost);
                if (addedBlogPost == null)
                {
                    return BadRequest("Failed to add blog post");
                }
                return CreatedAtAction(nameof(GetBlogPostById), new { id = addedBlogPost.BlogPostId }, addedBlogPost);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBlogPost(int id, [FromBody] BlogPost blogPost)
        {
            try
            {
                var existingBlogPost = await _blogRepo.GetBlogPostById(id);
                if (existingBlogPost == null)
                {
                    return NotFound($"Blog post with id {id} not found");
                }

                existingBlogPost.Title = blogPost.Title;
                existingBlogPost.Content = blogPost.Content;
                existingBlogPost.Author = blogPost.Author;

                var updatedBlogPost = await _blogRepo.UpdateBlogPost(existingBlogPost);
                if (updatedBlogPost == null)
                {
                    return BadRequest("Failed to update blog post");
                }

                return Ok(updatedBlogPost);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost(int id)
        {
            try
            {
                var deletedBlogPost = await _blogRepo.DeleteBlogPost(id);
                if (deletedBlogPost == null)
                {
                    return NotFound($"Blog post with id {id} not found");
                }

                return Ok(deletedBlogPost);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }



        //Controller for comment 
        [HttpGet("{blogId}/comments")]
        public async Task<IActionResult> GetCommentsForBlogPost(int blogId)
        {
            try
            {
                var comments = await _commentRepo.GetCommentsForBlogPost(blogId);
                return Ok(comments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("comments/{commentId}")]
        public async Task<IActionResult> GetCommentById(int commentId)
        {
            try
            {
                var comment = await _commentRepo.GetCommentById(commentId);
                if (comment == null)
                {
                    return NotFound($"Comment with id {commentId} not found");
                }
                return Ok(comment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("{blogId}/comments")]
        public async Task<IActionResult> AddCommentToBlog(int blogId, [FromBody] Comment comment)
        {
            try
            {
                var blogPost = await _blogRepo.GetBlogPostById(blogId);
                if (blogPost == null)
                {
                    return NotFound($"Blog post with id {blogId} not found");
                }

                comment.BlogPostId = blogId;
                var addedComment = await _commentRepo.AddComment(comment);
                if (addedComment == null)
                {
                    return BadRequest("Failed to add comment");
                }

                return CreatedAtAction(nameof(GetCommentById), new { commentId = addedComment.CommentId }, addedComment.CommentId);


            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("comments/{commentId}")]
        public async Task<IActionResult> UpdateComment(int commentId, [FromBody] Comment comment)
        {
            try
            {
                var existingComment = await _commentRepo.GetCommentById(commentId);
                if (existingComment == null)
                {
                    return NotFound($"Comment with id {commentId} not found");
                }

                existingComment.CommenterName = comment.CommenterName;
                existingComment.CommentContent = comment.CommentContent;

                var updatedComment = await _commentRepo.UpdateComment(existingComment);
                if (updatedComment == 0)
                {
                    return BadRequest("Failed to update comment");
                }

                return Ok(existingComment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("comments/{commentId}")]
        public async Task<IActionResult> DeleteComment(int commentId)
        {
            try
            {
                var deletedComment = await _commentRepo.DeleteComment(commentId);
                if (deletedComment == 0)
                {
                    return NotFound($"Comment with id {commentId} not found");
                }

                return Ok(deletedComment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}

