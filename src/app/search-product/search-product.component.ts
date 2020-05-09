import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  productId:string;
  model:Product;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
  constructor(private service:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  findById(){
    this.submitted=true;
    
      this.service.findProductById(this.productId).subscribe(
        (data)=>{
          this.dataFound=true;
          this.model=data;
          console.log(this.model);
          
        },
        (err)=>{
          this.dataNotFound=true;
          this.dataFound=false;
          setTimeout(()=>this.dataNotFound=false,3000);
        }
      )
  }
  goBack(){
    this.router.navigate(['product/view']);
  }

  
}
