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
  {path:'product/new',component:AddProductComponent},
  {path:'product/delete/:productId',component:DeleteProductComponent},
  {path:'product/search',component:SearchProductComponent},
  {path:'product/update/:productId',component:UpdateProductComponent},
  {path:'product/view',component:ProductListComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
