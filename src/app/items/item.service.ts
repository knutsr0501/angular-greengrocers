import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from './models/item';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  http = inject(HttpClient);
  private storeList: Item[] = [];
  cartList: Item[] = [];

  items: Promise<Item[]> = this.getItems();

  total: number = 0;

  //Fill the store list
  async getItems() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}`));
    // @ts-ignore
    this.storeList = result;
    return this.storeList;
  }

  addToCart(id: string) {
    const theItem = this.storeList.find((existing) => existing.id === id);

    //If item is in cart, update the amount
    if (this.cartList.find((existing) => existing.id === id)) {
      const index = this.cartList.findIndex((existing) => existing.id === id);
      this.cartList[index].amount++;
    } else {
      if (theItem) {
        theItem.amount = 1;
        this.cartList.push(theItem);
      }
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    for (const item of this.cartList) {
      this.total += item.price * item.amount;
    }
  }

  increase(id: string) {
    if (this.cartList.find((existing) => existing.id === id)) {
      const index = this.cartList.findIndex((existing) => existing.id === id);
      this.cartList[index].amount++;
      this.calculateTotal();
    } else {
      return;
    }
  }

  decrease(id: string) {
    if (this.cartList.find((existing) => existing.id === id)) {
      const index = this.cartList.findIndex((existing) => existing.id === id);
      if (this.cartList[index].amount > 1) {
        this.cartList[index].amount--;
      } else if (this.cartList[index].amount === 1) {
        this.cartList.splice(index, 1);
      }
      this.calculateTotal();
    } else {
      return;
    }
  }

}
