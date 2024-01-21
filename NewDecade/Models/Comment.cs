using NewDecade.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Comment
{
    [Key]
    public int CommentId { get; set; }

    [Required(ErrorMessage = "Please provide your name.")]
    public string CommenterName { get; set; }

    [Required(ErrorMessage = "Please provide your comment.")]
    public string CommentContent { get; set; }

    public DateTime DateCommented { get; set; } = DateTime.UtcNow;

    public int BlogPostId { get; set; }
    public BlogPost? BlogPost { get; set; }

    public int UserId { get; set; }
    public Users? Users { get; set; }
}
