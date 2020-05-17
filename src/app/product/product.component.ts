import { Component, OnInit, EventEmitter } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products : Product[];
  constructor() { 
   this.products = [
      new Product(
        'NICEHAT', // sku
        'A Nice Black Hat', // name
        '/assets/images/products/black-hat.jpg', // imageUrl
        ['Men', 'Accessories', 'Hats'], // department
        29.99 //price
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/luminous-shoe.jpg',
        ['Men', 'Accessories', 'Shoes'],
        29.99)

      ];
      
  }

  ngOnInit() {
  }

 productWasSelected(product: Product): void{
      console.log('product clicked', product);
  }

}