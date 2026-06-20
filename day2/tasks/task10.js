// Task10: Combine everything in a tiny app flow
import { API_BASE_URL } from './task3_config.js';
import { formatCurrency } from './task4_utils.js';
import { Product } from './task5.js';

// Simulated fetch for products
function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Apple', price: 0.99 },
        { name: 'Headphones', price: 59.99 }
      ]);
    }, 1000);
  });
}

async function mainApp() {
  console.log('Task10 - starting app, API_BASE_URL:', API_BASE_URL);
  try {
    const items = await fetchProducts();
    const products = items.map(i => new Product(i.name, i.price));
    console.log('Task10 - fetched products:');
    products.forEach(p => console.log('-', p.getInfo()));
    console.log('Task10 - formatted prices:');
    products.forEach(p => console.log(formatCurrency(p.price)));
  } catch (err) {
    console.log('Task10 - Error fetching products:', err.message);
  }
}

mainApp();