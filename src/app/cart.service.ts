import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor() { }
 
  addToCart(product) {
    this.items.push(product);
  }
  // The addToCart() method appends a product to an array of items.
 
  getItems() {
    return this.items;
  }
  // The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
 
  clearCart() {
    this.items = [];
    return this.items;
  }
  // The clearCart() method returns an empty array of items.
 
}