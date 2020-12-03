import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../MODELS/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getSingleProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../MODELS/product.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private _jsonURL = 'assets/DATA/products.json';
//   constructor(private Http: HttpClient) {}

//   getAllProducts(): Observable<any> {
//     let result = this.Http.get(this._jsonURL);
//     return result;
//   }
// }
