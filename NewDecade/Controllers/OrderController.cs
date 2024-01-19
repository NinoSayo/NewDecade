using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewDecade.Models;
using NewDecade.Repositories;

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }
      
        [HttpPost("AddItemToOrder/{orderId}")]
            public async Task<ActionResult<int>> AddItemToOrder(int orderId, Item item)
            {
                try
                {
                    var order = await orderRepository.GetOrderDetails(orderId);

                    if (order != null)
                    {
                        // Thực hiện tính toán số tiền thanh toán cho mục
                        decimal itemPayment = item.IsClothingSet ? CalculateClothingSetPayment(item):item.PaymentType == "PerWeight" ? await orderRepository.CalculateWeightPayment(orderId, item): item.PricePerUnit * item.Quantity;
                        // Thêm mục vào đơn hàng
                        var result = await orderRepository.AddItemToOrder(orderId, item);
                        // Cập nhật tổng số tiền và cân nặng của đơn hàng
                        order.TotalAmount += itemPayment;
                        order.TotalWeight += item.Weight * item.Quantity;

                        /*await orderRepository.SaveChangesAsync();*/
                        return result;
                    }

                    return BadRequest($"Failed to add item to order. OrderId {orderId} not found.");
                }
                catch (Exception ex)
                {
                    return BadRequest($"Failed to add item to order. Error: {ex.Message}");
                }
            }
        private decimal CalculateClothingSetPayment(Item item)
        {
            return item.PricePerUnit;

        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrderByUser(int userId)
        {
            try
            {
                var listOrder = await orderRepository.GetAllOrders(userId);
                return Ok(listOrder);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to get orders for user with id {userId}. Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> PostOrder([FromBody] Order order)
        {
            try
            {
                if (string.IsNullOrEmpty(order.FullName) || string.IsNullOrEmpty(order.Address) || string.IsNullOrEmpty(order.PhoneNumber))
                {
                    return BadRequest("Please provide your full name, address, and phone number.");
                }
                var result = await orderRepository.AddOrder(order);
                return Ok($"Order added successfully. OrderId: {result}");
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to add order. Error: {ex.Message}");
            }
        }
        /* đây là phần trạng thái đơn hàng
         [HttpPut("UpdateDeliveryStatus/{orderId}/{deliveryStatus}")]
         public async Task<ActionResult<int>> UpdateDeliveryStatus(int orderId, string deliveryStatus)
         {
             try
             {
                 var result = await orderRepository.UpdateDeliveryStatus(orderId, deliveryStatus);
                 return Ok($"Delivery status updated successfully for OrderId: {result}");
             }
             catch (Exception ex)
             {
                 return BadRequest($"Failed to update delivery status. Error: {ex.Message}");
             }
         }
         [HttpPut("UpdatePaymentStatus/{orderId}/{paymentStatus}")]
         public async Task<ActionResult<int>> UpdatePaymentStatus(int orderId, string paymentStatus)
         {
             try
             {
                 var result = await orderRepository.UpdatePaymentStatus(orderId, paymentStatus);
                 return Ok($"Payment status updated successfully for OrderId: {result}");
             }
             catch (Exception ex)
             {
                 return BadRequest($"Failed to update payment status. Error: {ex.Message}");
             }
         }

         [HttpPut("UpdateRemainingAmount/{orderId}/{itemId}/{remainingAmount}")]
         public async Task<ActionResult<int>> UpdateRemainingAmount(int orderId, int itemId, decimal remainingAmount)
         {
             try
             {
                 var result = await orderRepository.UpdateRemainingAmount(orderId, itemId, remainingAmount);
                 return Ok($"Remaining amount updated successfully for ItemId: {result}");
             }
             catch (Exception ex)
             {
                 return BadRequest($"Failed to update remaining amount. Error: {ex.Message}");
             }
         }
     }*/

    }
}
