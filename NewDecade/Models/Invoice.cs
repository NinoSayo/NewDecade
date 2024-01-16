namespace NewDecade.Models
{
    public class Invoice
    {
        public int InvoiceID { get; set; }
        public string CustomerID {  get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public string CustomerPhone { get; set; }
    }
}
