import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { ProductDetailsComponent } from './shop/product-details/product-details.component';
//import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path: '', component: HomeComponent,data:{breadcrumb:'Home'} },
 /*  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ProductDetailsComponent },  */
  { path: 'shop', loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule),
  data:{breadcrumb:'Shop'}},
  { path: 'basket', loadChildren:()=>import('./basket/basket.module').then(mod=>mod.BasketModule),
  data:{breadcrumb:'Basket'}},
  { path: 'checkout', loadChildren:()=>import('./checkout/checkout.module').then(mod=>mod.CheckoutModule),
  data:{breadcrumb:'Checkout'}},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
