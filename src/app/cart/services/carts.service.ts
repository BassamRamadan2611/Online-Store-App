import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  cartProducts:any[]=[]
   apiCart:any = "http://localhost:3000/carts/"


  cartData= new EventEmitter<any>()
  constructor(private http:HttpClient) {

  }
getAllCartsData(){
return this.http.get(this.apiCart)
}






}




