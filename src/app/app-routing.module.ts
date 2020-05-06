import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AddProductComponent} from './add-product/add-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {SearchProductComponent} from './search-product/search-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AboutComponent} from './about/about.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'deleteProduct',component:DeleteProductComponent},
  {path:'searchProduct',component:SearchProductComponent},
  {path:'updateProduct',component:UpdateProductComponent},
  {path:'viewAllProducts',component:ProductListComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
