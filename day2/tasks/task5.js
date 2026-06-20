// Task5: Product class
import { formatCurrency } from './task4_utils.js';

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    return `${this.name} - ${formatCurrency(this.price)}`;
  }
}

// demo
const p = new Product('Notebook', 9.99);
console.log('Task5 - product info:', p.getInfo());