import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  cartItemCount:number=0
allcartProducts:any[]= []

constructor( private service:SharedServiceService ,private productser:ProductsService,@Inject(DOCUMENT) private document: Document){

}

  ngOnInit():void{

    this.productser.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }


}



    //header.classList.toggle("sticky",window.scrollY > 0);






