import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { JuiceListComponent } from './juice-list/juice-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, pathMatch: 'full' 
  },
  { 
    path: 'detalhes/:id',
    component: ProductsDetailComponent
  },
  { 
    path: 'sucos/:id',
    component: JuiceListComponent
  },
  { 
    path: 'checkout',
    component: CheckoutComponent
  },
  { 
    path: 'fechar',
    component: FinalizeComponent
  },
  { 
    path: 'confirmar',
    component: FeedbackComponent
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
