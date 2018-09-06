import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  // Increment/Decrement Counter
  public counter : number = 0;    
  increment(){
    this.counter += 1;
  }  
  decrement(){
    this.counter -= 1;
  }

  faArrowLeft = faArrowLeft;
  faTimes = faTimes;
  faPlus = faPlus;
  faMinus = faMinus;

  ngOnInit() {
  }

}
