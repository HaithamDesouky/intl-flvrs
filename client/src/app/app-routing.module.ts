import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './COMPONENTS/cart/cart.component';
import { ThankyouComponent } from './COMPONENTS/thankyou/thankyou.component';
import { HomeComponent } from './PAGES/home/home.component';
import { CheckoutComponent } from './COMPONENTS/checkout/checkout.component';
import { CategoriesComponent } from './COMPONENTS/categories/categories.component';
import { SearchComponent } from './COMPONENTS/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: ':category', component: CategoriesComponent },
  { path: 'search/results', component: SearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
