import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentProducts: Products[] = [

  ];

  constructor(private productService: ProductService) {


  }

  addProductToCart(name: string) {
    const productToAdd = this.productService.products.find((product) => {
      product.name === name;
    });
    if (!productToAdd) return;
    this.currentProducts.push(productToAdd);
  }
}
