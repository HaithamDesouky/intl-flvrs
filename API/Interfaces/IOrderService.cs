using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IOrderService
    {
         Task<Order> CreateOrder( Order order);
    }
}