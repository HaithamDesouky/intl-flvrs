import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SERVICES/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/MODELS/product.model';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  NewsLetterForm!: FormGroup;

  constructor(
    private api: ProductService,
    private router: Router,
    private shopping_cart: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart() {
    this.api.getAllProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then((product) => {
      product;
    });
  }

  getSingleProduct(id: Number) {
    return this.products.find((prod) => prod.id === id);
  }

  getSingleCategory(category: String) {
    return this.products.filter((prod) => prod.category === category);
  }

  addToCart(p: any) {
    this.shopping_cart.addProduct(p);

    this.updateCart();
    this.shopping_cart.getTotal();
  }
}
