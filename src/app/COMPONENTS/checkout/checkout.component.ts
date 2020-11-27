import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

import { Router } from '@angular/router';
// import { OrderService } from '../../services/order.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'mg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartData: any;
  cartTotal: Number;
  // showSpinner: Boolean;
  checkoutForm: any;
  constructor(
    private shoppingCart: ShoppingCartService,
    // private orderService: OrderService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    this.cartTotal = 0;

    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.cartData = this.getCartContent();
    this.cartTotal = this.shoppingCart.getTotal();
  }

  getCartContent() {
    return this.shoppingCart.get_shopping_cart_items();
  }

  onCheckout() {
    // this.spinner.show().then((p) => {
    //   this.cartService.CheckoutFromCart(1);
    // });
    //console.log(this.checkoutForm.value);
  }
}
