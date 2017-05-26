import { Injectable } from '@angular/core';
import { PRODUCTS } from "app/products/mock-products";
import { Products } from "app/products/products";

@Injectable()
export class ProductsService {


  getProcuts() : Products{
    return PRODUCTS;
  }

}
