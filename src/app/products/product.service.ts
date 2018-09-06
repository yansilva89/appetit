import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  listProd() {
    return this.http.get<any[]>(`${this.productsUrl}`);
  }

}
