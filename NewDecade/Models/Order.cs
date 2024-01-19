using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Order
	{
        [Key]

        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public decimal ClothingSetPrice { get; set; }
        public List<Item> Items { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal TotalWeight { get; set; }
        public string DeliveryStatus { get; set; } // Sẵn Sàng, Đang Chờ, Đã Giao
        public string PaymentStatus { get; set; } // Trả trước, Thanh toán phần còn lại
        public string ColorStatus { get; set; } // Mã màu tương ứng với trạng thái
    }

}


