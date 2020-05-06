import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  success:boolean;
  categoryList=["Camping Equipment","Golf Equipment","Mountaineering Equipment","Outdoor Protection","Personal Accessories"];
  model:Product;
  resultModel:Product;
  productList:Product[];
  errorMsg:boolean;
  popupForm:boolean;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
  deletedSuccess:boolean;
  updateButtonSubmit:boolean;
  id:number;
  productId:string;

  constructor(private service:ProductServiceService,private router:Router) { 
    this.model= new Product();
  }

  ngOnInit(): void {
  }

  findById(){
    this.submitted=true; 
    
    this.service.findProductById(this.productId).subscribe(
      (data)=>{
        this.dataFound=true;
        this.model=data;
        this.popupForm=true;
        console.log(this.model);
      },
      (err)=>{
        this.dataNotFound=true;
        this.dataFound=false;
        setTimeout(()=>this.dataNotFound=false,3000);
      }
    )
  }
    
  updateProduct(){
    this.updateButtonSubmit=true;

    let productRecieveDate=new Date(this.model.productReceiveDate);
    let time=this.model.productReceiveTime.split(":")
    productRecieveDate.setHours(Number.parseInt(time[0]))
    productRecieveDate.setMinutes(Number.parseInt(time[1]))
    console.log(productRecieveDate)
    this.model.productReceiveTimeStamp=productRecieveDate.getTime();
    
    if(this.model!=null){
      this.service.updateProduct(this.model).subscribe(
        (data)=>{
          this.resultModel=data;
          this.success=true;
          setTimeout(()=>this.success=false,3000);
          this.popupForm=false;
        },
        (err)=>{
          this.errorMsg=true;
          setTimeout(()=>this.success=false,3000);
        }
      )
    }
  }

  onSubmit() {
    alert('PRODUCT UPDATED SUCCESSFULLY :-)' );
    this.router.navigate(['viewAllProducts']);
  }
}
