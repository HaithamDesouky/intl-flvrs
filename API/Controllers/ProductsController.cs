using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

  public class ProductsController : BaseApiController
  {
    private readonly IProductRepository _productsRepo;
    private readonly IMapper _mapper;
    public ProductsController(IProductRepository productsRepo, IMapper mapper)
    {
      _mapper = mapper;
      _productsRepo = productsRepo;

    }

    [HttpGet]

    public async Task<ActionResult<IReadOnlyList<ProductDto>>> GetProducts(string sort )
    {

      var allProducts = await _productsRepo.GetAllProductsAsync(sort);

          var Products = allProducts.AsQueryable();
      if(!string.IsNullOrEmpty(sort)){
        
        switch(sort)
        {
          case "priceasc":
          Products = Products.OrderBy(x => x.price);
          break;
          case "pricedesc":
          Products = Products.OrderByDescending(x => x.price);
          break;
          case "nameasc":
          Products = Products.OrderBy(x => x.name);
          break;
          case "namedesc":
          Products = Products.OrderByDescending(x => x.name);
          break;
        }


      }

      return Ok(_mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductDto>>(Products.ToList()));
    }


    [HttpGet("{id}")]

    public async Task<ActionResult<ProductDto>> GetProduct(int id )
    {


      var product = await _productsRepo.GetProductByIdAsync(id);


      return _mapper.Map<Product, ProductDto>(product);
    }


  }
}