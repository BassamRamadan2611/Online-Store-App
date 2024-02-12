import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngularMaterialModuleModule } from './shared/Material UI/AngularMaterialModule.module';





@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
AngularMaterialModuleModule,
    AngularFireModule.initializeApp(environment.firebase ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
