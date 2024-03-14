import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private readonly itemService: ItemService) {}

  items = this.itemService.items;
  displayedItems: Item[] = [];
  filterItems: Item[] = [];
  filtered: boolean = false;

  async ngOnInit() {
    this.displayedItems = await this.items;
    this.filterItems = await this.items;
  }

  addToCart(id: string) {
    this.itemService.addToCart(id);
  }

  sortAlphabet() {
    this.displayedItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortByPrice() {
    this.displayedItems.sort((a, b) => a.price - b.price);
  }

  filterFruits() {
    const newArray: Item[] = [];
    for (const item of this.filterItems) {
      if (item.type === 'fruit') {
        newArray.push(item);
      }
    }
    this.displayedItems = newArray;
  }

  filterVegetable() {
    const newArray: Item[] = [];
    for (const item of this.filterItems) {
      if (item.type === 'vegetable') {
        newArray.push(item);
      }
    }
    this.displayedItems = newArray;
  }

  showAll() {
    this.displayedItems = this.filterItems;
  }
}
