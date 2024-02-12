import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment, } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CartsService } from 'src/app/cart/services/carts.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  cartProducts:any[]=[]
   cartItems: any[] = []; // Your cart items
   cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();

 @Output() cartData = new EventEmitter<any>()
  term: any;

  constructor(private http:HttpClient , private cartservice:CartsService) {


  }

  getAllProducts():Observable<any>{
    return this.http.get("https://dummyjson.com/products?limit=0")
  }
  getAllCategories():Observable<any>{
    return this.http.get("https://dummyjson.com/products/categories")
  }

  getProductsByCategory(keyword:string):Observable<any>{
    return this.http.get("https://dummyjson.com/products/category/"+keyword)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get("https://dummyjson.com/products/"+id)

  }


  addToCart(dataProduct:any){
console.log("data",dataProduct)

let cartData:any=[]

cartData = this.cartProducts
      if ("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
        let exist = this.cartProducts.find(item =>item.item.id == dataProduct.item.id)
        if(exist){
          alert("This Product is already in your cart")
          cartData = this.cartProducts
        }
        else{
          this.cartProducts.push(dataProduct);
          cartData = this.cartProducts
          localStorage.setItem("cart",JSON.stringify(this.cartProducts))
          this.cartItems.push(dataProduct);
          this.updateCartItemCount()
          localStorage.setItem("cartItems",JSON.stringify(this.cartItems))

          alert("Product added Successfully")

        }
      }
      else{
        this.cartProducts.push(dataProduct);
        cartData = this.cartProducts
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        this.cartItems.push(dataProduct);
        this.updateCartItemCount()
        localStorage.setItem("cartItems",JSON.stringify(this.cartItems))
         console.log(cartData)

        alert("Product added Successfully")
      }

  }

deleteCartItem(index:any){


}
  updateCartItemCount() {

    this.cartItemCountSubject.next(this.cartItems.length);
   }

}
/*
    let cartData:any=[]
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    cartData = this.cartProducts
          if ("cart" in localStorage){
            let exist = this.cartProducts.find(item =>item.item.id == event.item.id)
            if(exist){
              alert("This Product is already in your cart")
              cartData = this.cartProducts
            }else{
              this.cartProducts.push(event);
              cartData = this.cartProducts
               localStorage.setItem("cart",JSON.stringify(this.cartProducts))
            //  this.cartItems.push(event);
             // this.updateCartItemCount()
              console.log(cartData)

            alert("Product added Successfully")

            }
            this.cartData.emit(this.cartProducts)
           }
           else{

            this.cartProducts.push(event);
            localStorage.setItem("cart",JSON.stringify(this.cartProducts))
          //  this.cartItems.push(event);
          //  this.updateCartItemCount()
          alert("Product added Successfully")
           }




    }
    */





  //   updateCartItemCount() {

     // this.cartItemCountSubject.next(this.cartItems.length);
    //}


    //this.cartItems.push(event);
    //this.updateCartItemCount()

