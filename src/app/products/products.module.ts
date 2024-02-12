import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsFavComponent } from './components/products-fav/products-fav.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductsFavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

  ],
  exports:[
    AllProductsComponent,
  ]
})
export class ProductsModule { }
