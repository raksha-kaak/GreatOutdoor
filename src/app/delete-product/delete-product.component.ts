import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId:string;
  model:Product;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
  deletedSuccess:boolean;
  deleteButtonSubmit:boolean;
  //productList:Product[];
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

  deleteProductById(){
    if(confirm("Are u sure want to delete?")){
      this.service.deleteProductById(this.model.productId).subscribe(
        (data)=>{
          this.model=null;
          this.deleteButtonSubmit=true;
          this.submitted=false;
          this.deletedSuccess=true;
          setTimeout(()=>this.deletedSuccess=false,3000);
          alert('PRODUCT DELETED SUCCESSFULLY :-)' );
          this.router.navigate(['viewAllProducts']);
        }
      )
    }
  }
}

