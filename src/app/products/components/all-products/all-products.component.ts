import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Output, EventEmitter } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartsService } from 'src/app/cart/services/carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  cartProducts:any[]=[]
  cartItems: any[] = []; // Your cart items
  cartItemCountSubject = new BehaviorSubject<number>(0);
 cartItemCount$ = this.cartItemCountSubject.asObservable();
cartData= new EventEmitter<any>()
  term: any;

loginMode:boolean = false

  constructor( private service:ProductsService ,private cartService:CartsService,private router:Router) { }


  ngOnInit(): void {


   this.AllProducts()
   this.AllCategories()

  }
  AllProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products =res.products;
      this.loading=false
    } ,(error:any)=>{
      this.loading=false
      alert(error.message)
    })
  }

  AllCategories(){
    this.loading=true
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories =res;
      this.loading=false
    } ,(error:any)=>{
      this.loading=false
      alert(error.message)
    })
  }

  filterCategory(event:any){

    let value = event.target.value;

    if (value =="all"){
      this.AllProducts();
    }
    else{
    this.getProdcuctsCategory(value)
    }

  }

  getProdcuctsCategory(keyword:string){
    this.loading=true
    this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.products =res.products;
    this.loading=false
    },error=>{
      this.loading=false
      alert(error.message)
    })
  }
///add to cart
  addToCart(event:any){

    if (JSON.parse(localStorage.getItem("token")!) == true){
      this.service.addToCart(event)
      console.log(event)
    }
    else{
      alert("you should login first")
      this.router.navigate(['/login'])
    }


  }







}
