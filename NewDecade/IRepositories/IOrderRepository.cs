using System;
using NewDecade.Models;

namespace NewDecade.IRepositories
{
	public interface IOrderRepository
	{
		Task<Order> OrderNextStep(int orderId);
	}
}

