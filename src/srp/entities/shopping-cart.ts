import { CartItem } from './interfaces/cart-item';
import { Product } from './product';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: Product): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Product[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => {
        return total + next.price;
      }, 0)
      .toFixed(2);
  }

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
