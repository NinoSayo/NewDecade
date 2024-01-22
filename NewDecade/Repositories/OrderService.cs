using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using ReactServer.Data;
using ReactServer.IRepository;
using ReactServer.Models;

namespace ReactServer.Services
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DatabaseContext db;

        public OrderRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task<Order> AddOrder(Order order)
        {
            // Thêm đơn hàng vào cơ sở dữ liệu
            db.Orders.Add(order);
            await db.SaveChangesAsync();

            if (order.LaundryType == "GiatTheoBoQuanAo")
            {
                order.TotalAmount = order.Quantity * 20000;
            }
           
            await db.SaveChangesAsync();

            return order;
        }

        public async Task<bool> DeleteOrder(int orderId)
        {
            var orderToDelete = await db.Orders.FindAsync(orderId);

            if (orderToDelete == null)
            {
                return false; // Đơn đặt hàng không tìm thấy
            }

            db.Orders.Remove(orderToDelete);
            await db.SaveChangesAsync();

            return true;
        }

        public async Task<IEnumerable<Order>> GetOrder()
        {
            return await db.Orders.ToListAsync();
        }

        public async Task<Order> GetOrderById(int orderid)
        {
            return await db.Orders.FindAsync(orderid);
        }

        public async Task<Order> UpdateOrder(Order order)
        {
            var existingOrder = await db.Orders.FindAsync(order.OrderId);

            if (existingOrder != null)
            {
                existingOrder.FullName = order.FullName;
                existingOrder.Address = order.Address;
                existingOrder.Phone = order.Phone;
                existingOrder.LaundryType = order.LaundryType;

                await db.SaveChangesAsync();
            }

            return existingOrder;
        }
    }
}
