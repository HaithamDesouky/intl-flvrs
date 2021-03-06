using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync (int id);
    

        Task<IReadOnlyList<Product>> GetAllProductsAsync(string sort );
      
        
    }
}