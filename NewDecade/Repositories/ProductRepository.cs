// ProductSerivce.cs
using Microsoft.EntityFrameworkCore;
using ReactServer.Data;
using ReactServer.IRepository;
using ReactServer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactServer.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly DatabaseContext db;

        public ProductRepository(DatabaseContext db)
        {
            this.db = db;
        }

        public async Task<Product> AddProduct(Product product)
        {
            db.Products.Add(product);
            await db.SaveChangesAsync();
            return product;
        }

        public async Task<bool> DeleteProduct(int id)
        {
            var productToDelete = await db.Products.FindAsync(id);

            if (productToDelete == null)
            {
                return false; // Product not found
            }

            db.Products.Remove(productToDelete);
            await db.SaveChangesAsync();

            return true;
        }

        public async Task<Product> GetProductById(int id)
        {
            return await db.Products.FindAsync(id);
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await db.Products.ToListAsync();
        }

        public async Task<Product> UpdateProduct(Product updatedProduct)
        {
            var existingProduct = await db.Products.FindAsync(updatedProduct.Id);

            if (existingProduct == null)
            {
                return null; // Product not found
            }

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Description = updatedProduct.Description;

            await db.SaveChangesAsync();

            return existingProduct;
        }
    }
}
