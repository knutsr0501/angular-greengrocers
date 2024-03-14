import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './total/total.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, StoreComponent, TotalComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [CartComponent, StoreComponent, TotalComponent],
})
export class ItemsModule {}
