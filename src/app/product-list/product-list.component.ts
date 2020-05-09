import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   productList:Product[];
   model:Product;
  constructor(private service:ProductServiceService,private router:Router) { }
  
  ngOnInit(): void {
    this.loadProductList();
     
  }

  loadProductList(){
    
    this.service.getProductList().subscribe(
      (data) => { this.productList = data; }
    );
  }


  goToAddProduct(){
    this.router.navigate(['product/new'])
  }
  goToDeleteProduct(productId){
    this.router.navigate(['product/delete',productId])
  }
  goToSearchProduct(){
    this.router.navigate(['product/search'])
  }
  goToUpdateProduct(productId){
    this.router.navigate(['product/update',productId])
  }

}
