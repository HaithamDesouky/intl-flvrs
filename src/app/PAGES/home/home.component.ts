import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  NewsLetterForm!: FormGroup;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.api.getJson().subscribe((resp) => {
      this.products = resp;
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then((product) => {
      product;
    });
  }
}
