import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { PRODUCTS } from "app/products/mock-products";
import { Products } from "app/products/products";


@Injectable()
export class ProductsService {

  private productsInfoUrl = 'http://localhost:50317/api/';  // URL to web API
  constructor(private http: Http) { }

  getProcuts(): Products {
    return PRODUCTS;
  }

  

  create(productQuantity: any,
    unitType: any,
    productDescription: any,
    flateRate: any,
    unitPrice: any,
    generalOfferInfoId: any): Observable<Products> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.productsInfoUrl + 'Products', { productQuantity, unitType, productDescription, flateRate, unitPrice, generalOfferInfoId }, options)
      .map(products => products.json())
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
