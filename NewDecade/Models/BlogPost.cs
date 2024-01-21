using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class BlogPost
	{
        [Key]
        public int BlogPostId { get; set; }

        [Required(ErrorMessage = "Please provide a title for the blog post.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please provide the content of the blog post.")]
        public string Content { get; set; }

        [Required(ErrorMessage = "Please provide the author's name.")]
        public string Author { get; set; }

        public DateTime DatePublished { get; set; } = DateTime.UtcNow;

        public List<Comment> Comments { get; set; } = new List<Comment>();
    }
}

