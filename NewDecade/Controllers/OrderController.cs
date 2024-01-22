using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactServer.IRepository;
using ReactServer.Models;

namespace ReactServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var orders = await _orderRepository.GetOrder();
            return Ok(orders);
        }
        [HttpGet("{orderId}")]
        public async Task<ActionResult<Order>> GetOrderById(int orderId)
        {
            var order = await _orderRepository.GetOrderById(orderId);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }


        [HttpPost]
        public async Task<ActionResult<Order>> AddOrder(Order order)
        {
            var addedOrder = await _orderRepository.AddOrder(order);
            return Ok(addedOrder);
        }

        [HttpDelete("{orderId}")]
        public async Task<ActionResult<bool>> DeleteOrder(int orderId)
        {
            var result = await _orderRepository.DeleteOrder(orderId);

            if (!result)
            {
                return NotFound(); // Đơn đặt hàng không tìm thấy
            }

            return Ok(result);
        }
    }
}
