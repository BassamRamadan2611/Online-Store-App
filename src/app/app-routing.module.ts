import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { VerifyEmailComponent } from './auth/components/verify-email/verify-email.component';
import { CartsComponent } from './cart/components/carts/carts.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './shared/services/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'cart',component:CartsComponent},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:ProductDetailsComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'varify-email',component:VerifyEmailComponent},
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  { path: '**', pathMatch: 'full',
  component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
