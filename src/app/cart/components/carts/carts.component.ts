import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {
  term: any
  public products:any=[];
  public grandTotal:number =0;
  cartProducts:any[]=[]
cartDeleted:boolean = false
 total:any=0
  success:boolean=false;


    constructor(private Service:CartsService,private productService:ProductsService ) {
      this.getTotal()
    }

    ngOnInit(): void {
      this.getCartProducts()
      this.getTotal()
      if(JSON.parse(localStorage.getItem("cart")!).length > 0 ){
        this.cartDeleted = true
      }
    }
    getCartProducts(){
      if ("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
        this.getTotal()
    }
    console.log(this.cartProducts)

  }

  getTotal(){
this.total =0
    for(let i in this.cartProducts){
      console.log(this.cartProducts[i])
      const totalPrice = this.cartProducts[i].item.price * this.cartProducts[i].quantity
      this.total += totalPrice
    }
    console.log(this.total)


  }

  addAmount(index:number){
    this.cartProducts[index].quantity++
    console.log( this.cartProducts[index].quantity)
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
  minsAmount(index:number){
    if (this.cartProducts[index].quantity == 0){
      alert("warning this process can not  ")
    }
    else {
      this.cartProducts[index].quantity--
      if (this.cartProducts[index].quantity)
      console.log( this.cartProducts[index].quantity)
      this.getTotal()
    }

    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
  detectChanges(){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  deleteProduct(id:number){
    this.cartProducts.splice(id,1);
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    if(this.cartProducts.length == 0){
      this.cartDeleted = false

    }

   this.getCartProducts()
   this.productService.cartItemCountSubject.next (JSON.parse(localStorage.getItem("cart")!).length)

}
  claerAllCart(){
    this.cartProducts=[];
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }





}
