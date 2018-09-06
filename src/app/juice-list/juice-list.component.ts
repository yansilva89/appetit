import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-juice-list',
  templateUrl: './juice-list.component.html',
  styleUrls: ['./juice-list.component.scss']
})
export class JuiceListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  public selectedObj: {};
  juice: Array<any>;

  // Increment/Decrement Counter
  public counter : number = 0;    
  increment(){
    this.counter += 1;
  }  
  decrement(){
    this.counter -= 1;
  }

  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faMinus = faMinus;
  faTimes = faTimes;

  ngOnInit() {
    this.listJuice();
  }

  listJuice() {
    this.productService.listProd().subscribe(data => this.juice = data.filter(item => item.type[0].name === 'juice'));
  }

  checkedActiveItem(evnt, item): void {
    if (item.active) {
      item.active = false;
    } else {
      item.active = true;
    }
  }

}
