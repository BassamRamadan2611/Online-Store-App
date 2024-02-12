import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartsService } from 'src/app/cart/services/carts.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  constructor(private cartservice:CartsService,private productService:ProductsService ,private router:Router, private auth:AuthService){

  }
  cartItemCount:number=0
loginMode:boolean = false
mode:boolean = true


  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("token")!) == true || JSON.parse(localStorage.getItem("token")!) != ""){
      this.loginMode = true
    }

    this.productService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
      this.cartItemCount = JSON.parse(localStorage.getItem("cart")!).length
  })
}
logOut(){
this.auth.logout()

}


}



