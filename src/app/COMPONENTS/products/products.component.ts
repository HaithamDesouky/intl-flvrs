import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../SERVICES/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products: any[];

  constructor(private shopping_cart: ShoppingCartService) {
    this.products = [];
  }

  ngOnInit(): void {}

  addToCart(p: any) {
    this.shopping_cart.addProduct(p);
  }
}
