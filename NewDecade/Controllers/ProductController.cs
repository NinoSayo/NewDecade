// ProductController.cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactServer.IRepository;
using ReactServer.Models;
using System.Threading.Tasks;

namespace ReactServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository repo;

        public ProductController(IProductRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult> GetProducts()
        {
            return Ok(await repo.GetProducts());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetProductById(int id)
        {
            var product = await repo.GetProductById(id);

            if (product == null)
            {
                return NotFound(); // Product not found
            }

            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult> PostProduct(Product product)
        {
            return Ok(await repo.AddProduct(product));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutProduct(int id, Product updatedProduct)
        {
            var product = await repo.GetProductById(id);

            if (product == null)
            {
                return NotFound(); // Product not found
            }

            var result = await repo.UpdateProduct(updatedProduct);

            if (result == null)
            {
                return BadRequest(); // Update failed
            }

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var result = await repo.DeleteProduct(id);

            if (!result)
            {
                return NotFound(); // Product not found
            }

            return NoContent();
        }
    }
}
