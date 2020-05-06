import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  success:boolean;
  categoryList=["Camping Equipment","Golf Equipment","Mountaineering Equipment","Outdoor Protection","Personal Accessories"];
  model:Product;
  constructor(private service:ProductServiceService,private router:Router) { 
    this.model= new Product();
  }


  ngOnInit(): void {
  }

  addProduct(){
    let productRecieveDate=new Date(this.model.productReceiveDate);
    let time=this.model.productReceiveTime.split(":")
    productRecieveDate.setHours(Number.parseInt(time[0]))
    productRecieveDate.setMinutes(Number.parseInt(time[1]))
    console.log(productRecieveDate)
    this.model.productReceiveTimeStamp=productRecieveDate.getTime();
  
    let orb=this.service.addProduct(this.model);
      orb.subscribe((data)=>
      {
        this.success=true;
        setTimeout(()=>this.success=false,3000);
      })
  }

  onSubmit() {
    alert('PRODUCT ADDED SUCCESSFULLY :-)' );
    this.router.navigate(['viewAllProducts']);
  }

  // addProduct(){
  //   if(this.model!=null){
  //   this.service.addProduct(this.model);
  //   this.success=true;
  //   setTimeout(()=>this.success=false,3000);
  //   this.router.navigate(['viewAllProducts']);
  // }
    }
  

  


