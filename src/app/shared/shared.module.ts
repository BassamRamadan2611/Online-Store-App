import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { AngularMaterialModuleModule } from './Material UI/AngularMaterialModule.module';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerLoaderComponent,
    ProductComponent,
    SearchPipe,
    FooterComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModuleModule

  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    SpinnerLoaderComponent,
    ProductComponent,
    FooterComponent,
    SearchPipe,
    NavbarComponent,
    HomeComponent
  ]

})
export class SharedModule { }
