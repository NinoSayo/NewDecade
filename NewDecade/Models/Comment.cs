using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }

        [Required(ErrorMessage = "Please provide your name.")]
        public string CommenterName { get; set; }

        [Required(ErrorMessage = "Please provide your comment.")]
        public string CommentContent { get; set; }

        public DateTime DateCommented { get; set; } = DateTime.UtcNow;

        public string UserId { get; set; }

        // Khóa ngoại đến UserModel
        //[ForeignKey("UserId")]
        //public Users Users { get; set; }
    }
}

