import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { UserCompanyInfo } from "app/user-company-info/user-company-info";
import { UserCompanyInfoService } from "app/user-company-info/user-company-info.service";
import { ClientInfoService } from "app/client-info/client-info.service";
import { ClientInfo } from "app/client-info/client-info";
import { ProductsService } from "app/products/products.service";
import { Products } from "app/products/products";
import { GeneralOfferInfoService } from "app/gen-offer-info/general-offer-info.service";
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],

})
export class OfferComponent implements OnInit {

  products: Products;
  userCompanyInfos: UserCompanyInfo;

  generalInfo: GeneralOfferInfo;

  clientInfo = <ClientInfo[]>Array();
  errorMessage: string;
  mode = 'Observable';
  constructor(private userCompanyInfoService: UserCompanyInfoService,
    private clientInfoService: ClientInfoService,
    private productsService: ProductsService,
    private generalOfferInfoService: GeneralOfferInfoService) { }

  ngOnInit(): void {
    this.userCompanyInfos = this.userCompanyInfoService.getUserCompanyInfos()
    this.getClientInfos();
    this.products = this.productsService.getProcuts();
    this.generalInfo = this.generalOfferInfoService.getGeneralInfo();

  }

  getClientInfos() {
    this.clientInfoService.getClientInfos()
      .subscribe(
      clientInfo => {
        console.log('0001', clientInfo);
        this.clientInfo = clientInfo;
      },
      error => this.errorMessage = <any>error);
  }



    private hideElement: boolean = false;
    private hideElement2: boolean = true;

toggleElement(){
  this.hideElement = !this.hideElement;
  this.hideElement2 = !this.hideElement2;
}


print(){
  window.print()
}


  


}
