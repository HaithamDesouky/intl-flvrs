import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SERVICES/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/MODELS/product.model';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  NewsLetterForm!: FormGroup;
  filter: any;

  constructor(
    private api: ProductService,
    private route: ActivatedRoute,
    private routerR: Router,
    private shopping_cart: ShoppingCartService
  ) {
    this.routerR.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.filter = this.route.snapshot.params.category;
  }

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart() {
    this.api.getAllProducts().subscribe((resp) => {
      this.products = resp.filter(
        (item: any) => item.category.toLowerCase() === this.filter.toLowerCase()
      );
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
