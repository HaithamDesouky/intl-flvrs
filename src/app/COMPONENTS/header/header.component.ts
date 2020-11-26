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

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  signOut() {
    this.auth.logOut();
  }
}
