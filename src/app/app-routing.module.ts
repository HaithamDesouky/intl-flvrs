import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './COMPONENTS/cart/cart.component';
import { ThankyouComponent } from './COMPONENTS/thankyou/thankyou.component';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'thankyou', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
