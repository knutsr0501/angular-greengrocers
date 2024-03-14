import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly itemService: ItemService) {}

  cartList = this.itemService.cartList;
  displayedItems: Item[] = [];

  async ngOnInit() {
    this.displayedItems = await this.cartList;
  }

  increase(id: string) {
    this.itemService.increase(id);
  }
  decrease(id: string) {
    this.itemService.decrease(id);
  }
}
