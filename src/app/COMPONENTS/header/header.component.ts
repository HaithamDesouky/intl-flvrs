import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/SERVICES/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  searchValue: any;

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cartTotal = 0;
    this.cartData = [];
    this.SearchForm = this.fb.group({
      searchValue: [''],
      category: [''],
    });
  }

  ngOnInit(): void {
    this.getCartContent();
    this.cartTotal = this.shoppingCart.getTotal();
    this.cartData = this.getCartContent();
  }

  onSubmit(): void {
    const searchVal = this.SearchForm.value.searchValue;
    const searchCat = this.SearchForm.value.category;

    this.router.navigate([`/search/${searchVal}?${searchCat}`]);
  }

  signOut() {
    this.auth.logOut();
  }

  getCartLength() {
    this.cartData = this.getCartContent();
    return this.shoppingCart.getCartLength();
  }

  getCartContent() {
    this.cartTotal = this.shoppingCart.getTotal();

    return this.shoppingCart.get_shopping_cart_items();
  }
}
