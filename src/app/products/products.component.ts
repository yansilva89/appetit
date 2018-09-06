import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  juice: Array<any>;
  snacks: Array<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listSnack();
    this.listJuice();
  }

  listSnack() {
    this.productService.listProd().subscribe(data => this.snacks = data.filter(item => item.type[0].name === 'snack'));
  }
  listJuice() {
    this.productService.listProd().subscribe(data => this.juice = data.filter(item => item.type[0].name === 'juice'));
  }
}
