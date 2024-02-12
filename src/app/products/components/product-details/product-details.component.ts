import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any
  data:any={}
  loading:boolean=false;
  imgs=[]
  constructor(private route:ActivatedRoute,private service:ProductsService){
this.id = this.route.snapshot.paramMap.get("id")
console.log(this.id)

  }

  ngOnInit():void{
    this.getProduct();

  }
  getProduct(){
    this.loading=true
    this.service.getProductById(this.id).subscribe((res:any)=>{
this.data=res
this.imgs = res.images
this.loading=false
    },
    (error:any)=>{alert(error.message)
      this.loading=false}
    )

  }

}
