using Microsoft.EntityFrameworkCore;
using NewDecade.Data;
using NewDecade.Models;

namespace NewDecade.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DatabaseContext db;
    public OrderRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task<int> AddItemToOrder(int orderId, Item item)
        {
            var order = await db.Orders.Include(o => o.Items).FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order != null)
            {
                order.Items.Add(item);
                if (item.IsClothingSet)
                {
                    order.ClothingSetPrice += item.PricePerUnit;
                }
                else
                {
                    order.TotalAmount += item.PricePerUnit * item.Quantity;
                    order.TotalWeight += item.Weight * item.Quantity; // Add this line if weight is needed
                }

                await db.SaveChangesAsync();
                return item.ItemId;
            }

            return -1;
        }

        public async Task<int> AddOrder(Order order)
        {
            db.Orders.Add(order);
            await db.SaveChangesAsync();
            return order.OrderId;
        }

        public async Task<int> DeleteOrder(int orderId)
        {
            var order = await db.Orders.FindAsync(orderId);
            if (order != null)
            {
                db.Orders.Remove(order);
                return await db.SaveChangesAsync();
            }
            return 0; 
        }
        public async Task<IEnumerable<Order>> GetAllOrders(int userId)
        {
            return await db.Orders.Where(o => o.UserId == userId).ToListAsync();
        }

        public async Task<Order> GetOrderDetails(int orderId)
        {
            return await db.Orders.FindAsync(orderId);
        }


        public async Task<int> UpdateDeliveryStatus(int orderId, string deliveryStatus)
        {
            var order = await db.Orders.FindAsync(orderId);
            if (order != null)
            {
                order.DeliveryStatus = deliveryStatus;
                await db.SaveChangesAsync();
                return orderId;
            }
            return 0; 
        }
        public async Task<int> UpdateItemDetails(int orderId, int itemId, decimal weight, string paymentType)
        {
            var order = await db.Orders.Include(o => o.Items).FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order != null)
            {
                var item = order.Items.FirstOrDefault(i => i.ItemId == itemId);
                if (item != null)
                {
                    item.Weight = weight;
                    item.PaymentType = paymentType;

                    await db.SaveChangesAsync();
                    return itemId;
                }
            }

            return 0;
        }
        public async Task<int> UpdatePaymentStatus(int orderId, string paymentStatus)
        {
            var order = await db.Orders.FindAsync(orderId);
            if (order != null)
            {
                order.PaymentStatus = paymentStatus;
                await db.SaveChangesAsync();
                return orderId;
            }
            return 0;
        }

        public async Task<int> UpdateRemainingAmount(int orderId, int itemId, decimal remainingAmount)
        {
            var order = await db.Orders.Include(o => o.Items).FirstOrDefaultAsync(o => o.OrderId == orderId);

            if (order != null)
            {
                var item = order.Items.FirstOrDefault(i => i.ItemId == itemId);
                if (item != null)
                {
                    item.RemainingAmount = remainingAmount;
                    await db.SaveChangesAsync();
                    return itemId;
                }
            }

            return 0; 
        }
        public async Task<decimal> CalculateLaundryPayment(int orderId, Item item)
        {
            decimal laundryPayment = item.LaundryQuantity * 20000; // 20,000 đồng cho mỗi lần giặt

            return laundryPayment;
        }

        public async Task<decimal> CalculateWeightPayment(int orderId, Item item)
        {
            decimal weightPayment = item.Weight * 30000; // 30,000 đồng cho mỗi kg

            return weightPayment;
        }
    }
}
