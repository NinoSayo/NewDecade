using ReactServer.Models;

namespace ReactServer.IRepository
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetOrder();
        Task<Order> GetOrderById(int orderid);
        Task<Order> AddOrder(Order order);
        Task<Order> UpdateOrder(Order order);
        Task<bool> DeleteOrder(int orderid);
    }
}
