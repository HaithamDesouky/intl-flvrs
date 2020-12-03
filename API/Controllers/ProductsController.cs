using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

  public class ProductsController : BaseApiController
  {
    private readonly DataContext _context;
    public ProductsController(DataContext context)
    {
      _context = context;

    }

    [HttpGet]

    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
      
        return await _context.Products.ToListAsync();

    }


     [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProduct(int id )
    {
        var singleProduct = await _context.Products.FindAsync(id);

        return singleProduct;
    }


  }
}