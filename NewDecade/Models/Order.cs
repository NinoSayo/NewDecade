using System.ComponentModel.DataAnnotations;

namespace ReactServer.Models
{
    public class Order 
    {
        public int OrderId { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public int Phone { get; set; }
        public int Quantity { get; set; }
        public int Weight { get; set; }
        public string LaundryType { get; set; }
        public int TotalAmount {  get; set; } 

    }
}
