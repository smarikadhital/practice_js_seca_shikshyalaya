// Task6: Inheritance - Product -> FoodProduct
import { Product } from './task5.js';

export class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate; // ISO date string or Date
  }
  getInfo() {
    return `${super.getInfo()} (expires: ${this.expiryDate})`;
  }
}

// demo
const apple = new FoodProduct('Apple', 0.5, '2026-12-31');
console.log('Task6 - food product info:', apple.getInfo());