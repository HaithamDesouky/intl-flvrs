import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SERVICES/products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModelServer } from 'src/app/MODELS/product.model';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  products: ProductModelServer[] = [];
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
    this.filter = this.route.snapshot.params.filter;
  }

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart() {
    let searchVal = this.filter.split('?')[0];
    let categoryVal = this.filter.split('?')[1];

    if (searchVal && categoryVal) {
      this.api.getAllProducts().subscribe((resp) => {
        this.products = resp.filter(
          (item: any) =>
            item.name.toLowerCase().includes(searchVal.toLowerCase()) &&
            item.category === categoryVal
        );
      });
    } else if (searchVal) {
      this.api.getAllProducts().subscribe((resp) => {
        this.products = resp.filter((item: any) =>
          item.name.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
    }
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
