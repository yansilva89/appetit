import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  public aditional: any[];
  public selectedObj: {};

  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faMinus = faMinus;

  // Increment/Decrement Counter
  public counter : number = 0;    
  increment(){
    this.counter += 1;
  }  
  decrement(){
    this.counter -= 1;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.itemSelected(+params.id));
    this.listAditional();
  } 

  listAditional() {
    this.productService.listProd().subscribe(data => this.aditional = data.filter(item => item.type[0].name === 'aditional'));
  }


    // Função para selecionar o item que vem pela a url (params), é selecionada pelo o id

    itemSelected(id: number): any {
      this.productService.listProd()
      .subscribe((items) => {
         this.selectedObj = items.filter((item) => item.id === id)[0];
         console.log(this.selectedObj, 'object');
         
      });
    }
  
    // Função para criar um atributo no objeto do item, serve para selecionar o item que vai receber o a class active
  
    checkedActiveItem(evnt, item): void {
      if (item.active) {
        item.active = false;
      } else {
        item.active = true;
      }
    }

}
