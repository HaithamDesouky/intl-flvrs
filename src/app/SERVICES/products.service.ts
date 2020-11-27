import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModelServer } from '../MODELS/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _jsonURL = 'assets/DATA/products.json';
  constructor(private Http: HttpClient) {}

  getAllProducts(): Observable<any> {
    let result = this.Http.get(this._jsonURL);
    return result;
  }
}
