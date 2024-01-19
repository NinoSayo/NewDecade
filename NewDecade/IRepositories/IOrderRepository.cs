// Trong Repositories/IOrderRepository.cs
using NewDecade.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewDecade.Repositories
{
    public interface IOrderRepository
    {
        Task<int> AddOrder(Order order);
        Task<int> DeleteOrder(int Id);
        Task<IEnumerable<Order>> GetAllOrders(int userId);  
        Task<Order> GetOrderDetails(int userId);
        Task<int> AddItemToOrder(int orderId, Item item);
        Task<int> UpdateDeliveryStatus(int orderId, string deliveryStatus);
        Task<int> UpdatePaymentStatus(int orderId, string paymentStatus);
        Task<int> UpdateRemainingAmount(int orderId, int itemId, decimal remainingAmount);
        Task<int> UpdateItemDetails(int orderId, int itemId, decimal weight, string paymentType);
        Task<decimal> CalculateLaundryPayment(int orderId, Item item);
        Task<decimal> CalculateWeightPayment(int orderId, Item item);

    }
}
