import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/SERVICES/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  SearchForm!: FormGroup;
  cartTotal: number;
  cartData: any;

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService,
    private fb: FormBuilder
  ) {
    this.cartTotal = 0;
    this.cartData = [];
  }

  ngOnInit(): void {
    this.getCartContent();
    this.cartTotal = this.shoppingCart.getTotal();
    this.cartData = this.getCartContent();
  }

  signOut() {
    this.auth.logOut();
  }

  getCartLength() {
    console.log('content of cart', this.cartData);
    this.cartData = this.getCartContent();
    return this.shoppingCart.getCartLength();
  }

  getCartContent() {
    this.cartTotal = this.shoppingCart.getTotal();

    return this.shoppingCart.get_shopping_cart_items();
  }
}
