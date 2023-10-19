import { Injectable } from '@angular/core';
import { Category, Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: { [key: string]: Category } = {
    clothes: {
      subCategories: {
        't-shirts': {
          subCategories: {
            'round colar': {}
          }
        }
      }
    },
    electronics: {
      subCategories: {
        'computer': {}
      },
    }
  }

  products: Products[] = [
    {
      name: 't-shirt',
      id: 1,
      price: 25,
      color: 'white',
      category: this.categories['clothes'],
    },
    {
      name: 'computer',
      id: 2,
      price: 2000,
      color: 'grey',
      category: this.categories['electronics'],
      'processor-power': '29Ghz',
      ram: {
        value: 32,
        unit: 'GB'
      }
    }
  ];
}
