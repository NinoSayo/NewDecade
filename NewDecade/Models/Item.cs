using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewDecade.Models
{
	public class Item
	{
        [Key]
        public int ItemId { get; set; }
        public string ProductName { get; set; }
        public bool IsClothingSet { get; set; }
        public int Quantity { get; set; }
        public decimal PricePerUnit { get; set; }
        public decimal Weight { get; set; } // Cân nặng của túi hoặc bộ quần áo
        public string PaymentType { get; set; } // "PerWeight" hoặc "FixedAmount" để xác định loại thanh toán
        public decimal RemainingAmount { get; set; } // Số tiền còn lại cần thanh toán

        public int LaundryQuantity { get; set; } // Số lượng muốn giặt
    }
}

