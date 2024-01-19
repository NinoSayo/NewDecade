using System;
using NewDecade.Data;
using NewDecade.IRepositories;
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

        public Task<Order> OrderNextStep(int orderId)
        {
            
        }
    }
}

