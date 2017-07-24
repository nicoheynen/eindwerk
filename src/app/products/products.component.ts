import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from "app/products/products.service";
import { Products } from "app/products/products";
import { GeneralOfferInfoService } from "app/gen-offer-info/general-offer-info.service";
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

@Input() products: Products;
 generalInfo: GeneralOfferInfo;

  constructor(private productsService: ProductsService,
  private generalOfferInfoService: GeneralOfferInfoService) { }

  ngOnInit() {
    this.products = this.productsService.getProcuts();
    this.generalInfo = this.generalOfferInfoService.getGeneralInfo();
  }


  addProduct(){
this.products.productsData.push({
      "productQuantity":  this.products.productQuantity,
      "unitType": this.products.unitType,
      "productDescription":this.products.productDescription,
      "flateRate": this.products.flateRate,
      "unitPrice": this.products.unitPrice,
});


if(this.products.flateRate == true)
{
this.products.productQuantity = 1;
this.products.qtyShowed = "forfait";
this.products.unitType = "";
}
if(this.products.flateRate == false)
 {
  this.products.qtyShowed = this.products.productQuantity;
}


this.products.productPrice = this.products.unitPrice*this.products.productQuantity;
this.products.toPayNoTva = this.products.toPayNoTva + this.products.productPrice;
this.products.toPay = this.products.toPayNoTva + (this.products.toPayNoTva/100*this.generalInfo.taxPercent);

this.products.productObjects.push({
  "description": this.products.productDescription, 
  "unitPrice": this.products.unitPrice, 
  "quantity": this.products.qtyShowed, 
  "price": this.products.productPrice,
"unitType": this.products.unitType});

}   
hideQty: boolean = true;

toggleQtyOn(){
this.hideQty = true;
this.products.flateRate = false;
}
toggleQtyOff(){
this.hideQty = false;
this.products.flateRate = true;
}



}
