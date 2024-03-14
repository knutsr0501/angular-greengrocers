import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './items/store/store.component';
import { CartComponent } from './items/cart/cart.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
