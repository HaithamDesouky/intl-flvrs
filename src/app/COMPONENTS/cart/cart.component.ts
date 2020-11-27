import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

// import { CartModelServer } from '../../models/cart.model';

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  ChangeQuantityForm!: FormGroup;
  cartData: any;
  cartTotal: Number;

  constructor(
    public shoppingCart: ShoppingCartService,
    private fb: FormBuilder
  ) {
    this.cartTotal = 0;
    this.cartData = [];
  }

  ngOnInit() {
    this.cartData = this.getCartContent();
    this.cartTotal = this.shoppingCart.getTotal();
  }

  ChangeQuantity(increment: number, product: any) {
    this.shoppingCart.changeQuantity(increment, product);
    this.cartData = this.shoppingCart.get_shopping_cart_items();
    this.updateTotal();
  }

  getCartContent() {
    return this.shoppingCart.get_shopping_cart_items();
  }

  updateTotal() {
    this.cartTotal = this.shoppingCart.getTotal();
  }

  removeProductFromCart(product: any) {
    this.shoppingCart.removeEntireProduct(product);
    this.cartData = this.getCartContent();
    this.updateTotal();
  }
}
