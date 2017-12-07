import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared.module';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [ProductsService],
  declarations: [ListComponent, ProductsComponent, AddProductComponent]
})
export class ProductsModule { }
