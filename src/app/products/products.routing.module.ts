import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
