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

  public class OrderController : BaseApiController
  {
    private readonly IOrderService _orderService;
    private readonly IMapper _mapper;
    public OrderController(IOrderService orderService, IMapper mapper)
    {
      _mapper = mapper;
      _orderService = orderService;

    }

    [HttpPost]

    public async Task<ActionResult<Order>> CreateOrder(Order orderReceived)
    {

     var order = await _orderService.CreateOrder( orderReceived);

    if(order == null) return BadRequest("Problem creating order");

    return order;

    }

        



    // [HttpGet("{id}")]

  //   public async Task<ActionResult<ProductDto>> GetProduct(int id )
  //   {


  //     var product = await _productsRepo.GetProductByIdAsync(id);


  //     return _mapper.Map<Product, ProductDto>(product);
  //   }




   }
}