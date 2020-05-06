import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl:string;
  
  constructor(private http:HttpClient) { 
    this.baseUrl=`${environment.baseMwUrl}/inventory`;
  }
  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);  
  }
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product);
  }
  findProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }
  deleteProductById(productId:string):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${productId}`); 
  }
  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.baseUrl,product);
  }

}
