import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailService {

  productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  listProdDetails(id) {
    return this.http.get<any[]>(`${this.productsUrl}/${id}`);
  }
}
