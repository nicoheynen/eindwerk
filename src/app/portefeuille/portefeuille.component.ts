import { Component, OnInit, Input, Pipe, PipeTransform, Injectable } from '@angular/core';
import { ClientInfo } from "app/client-info/client-info";
import { ClientInfoService } from "app/client-info/client-info.service";
import { GeneralOfferInfoService } from "app/gen-offer-info/general-offer-info.service";
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";
import { Products } from "app/products/products";
import { ProductsService } from "app/products/products.service";

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent implements OnInit {

  toggle = false;
  newClient = false;


  errorMessage: string;
  mode = 'Observable';
  clientInfo = <ClientInfo[]>Array();
  selectedClient: ClientInfo;

  selectId: any;
  selectedOffer: GeneralOfferInfo;
  generalInfoToSave = <GeneralOfferInfo[]>Array();

  products: Products;
  productsToSave = <Products[]>Array();


  constructor(private clientInfoService: ClientInfoService, private generalOfferInfoService: GeneralOfferInfoService, private productsService: ProductsService) { }

  ngOnInit() {
    this.getClientInfos();
    this.selectedClient = this.clientInfoService.getSelectedClientInfo();
    this.selectedOffer = this.generalOfferInfoService.getGeneralInfo();
    this.products = this.productsService.getProcuts();

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

  addClient(clientNumber: any,
    clientName: any,
    clientStreetName: any,
    clientHouseNumber: any,
    clientPostalCode: any,
    clientCity: any,
    tvaClient: any) {
    if (!clientName) { return; }
    this.clientInfoService.create(clientNumber, clientName, clientStreetName, clientHouseNumber, clientPostalCode, clientCity, tvaClient)
      .subscribe(
      clientInfo => this.clientInfo.push(clientInfo),
      error => this.errorMessage = <any>error);
  }

  updateClient(clientNumber: any,
    clientName: any,
    clientStreetName: any,
    clientHouseNumber: any,
    clientPostalCode: any,
    clientCity: any,
    tvaClient: any) {
    if (!this.selectId) { return; }
    this.clientInfoService.update(this.selectId, clientNumber, clientName, clientStreetName, clientHouseNumber, clientPostalCode, clientCity, tvaClient)
      .subscribe(

      data => {
        // refresh the list
        this.getClientInfos();
        return true;
      },
      error => this.errorMessage = <any>error);
  }


  delete(clientInfo) {
    if (confirm("Suprimer " + clientInfo.ClientName + "?")) {
      this.clientInfoService.delete(clientInfo.Id).subscribe(
        data => {
          // refresh the list
          this.getClientInfos();
          return true;
        },
        error => this.errorMessage = <any>error);
    }
  }


  selectClient(clientInfo) {
    this.selectId = clientInfo.Id;
    this.selectedClient.clientName = clientInfo.ClientName;
    this.selectedClient.clientStreetName = clientInfo.ClientStreetName;
    this.selectedClient.clientHouseNumber = clientInfo.ClientHouseNumber;
    this.selectedClient.clientPostalCode = clientInfo.ClientPostalCode;
    this.selectedClient.clientCity = clientInfo.ClientCity;
    this.selectedClient.clientNumber = clientInfo.ClientNumber;
    this.selectedClient.tvaClient = clientInfo.TvaClient;
    this.selectedClient.generalOfferInfos = clientInfo.GeneralOfferInfos;


  }

  selectOffer(clientOffers) {
    this.selectedOffer.reference = clientOffers.Reference;
    this.selectedOffer.date = clientOffers.Date;
    this.selectedOffer.factureGoal = clientOffers.FactureGoal;
    this.selectedOffer.notice = clientOffers.Notice;
    this.selectedOffer.offerGoal = clientOffers.OfferGoal;
    this.selectedOffer.factureReference = clientOffers.FactureReference;
    this.selectedOffer.taxPercent = clientOffers.TaxPercent;
    //this.selectedOffer.products = clientOffers.Products;


    clientOffers.Products.forEach(i => {
      this.products.productQuantity = i.ProductQuantity;
      this.products.unitType = i.UnitType;
      this.products.productDescription = i.ProductDescription;
      this.products.flateRate = i.FlateRate;
      this.products.unitPrice = i.UnitPrice;


      if (this.products.flateRate == true) {
        this.products.productQuantity = 1;
        this.products.qtyShowed = "forfait";
        this.products.unitType = "";
      }
      if (this.products.flateRate == false) {
        this.products.qtyShowed = this.products.productQuantity;
      }


      this.products.productPrice = this.products.unitPrice * this.products.productQuantity;
      this.products.toPayNoTva = this.products.toPayNoTva + this.products.productPrice;
      this.products.toPay = this.products.toPayNoTva + (this.products.toPayNoTva / 100 * this.selectedOffer.taxPercent);

      this.products.productObjects.push({
        "description": this.products.productDescription,
        "unitPrice": this.products.unitPrice,
        "quantity": this.products.qtyShowed,
        "price": this.products.productPrice,
        "unitType": this.products.unitType
      });

    })

  }


addGeneralOfferInfo(    taxPercent: any,
    notice: any,
   reference : any,
    offerGoal: any,
    date: any,
    factureReference: any,
    factureGoal: any,
    clientId: any) {
    if (!clientId) { return; }
    this.generalOfferInfoService.create(taxPercent, notice, reference, offerGoal, date, factureReference, factureGoal,clientId)
      .subscribe(
       generalInfoToSave => this.generalInfoToSave.push(generalInfoToSave),
       
      error => this.errorMessage = <any>error);
           
      
  }



  addProduct(productQuantity: any,
    unitType: any,
    productDescription: any,
    flateRate: any,
    unitPrice: any,
    generalOfferInfoId: any) {
    if (!generalOfferInfoId) { return; }
    this.productsService.create(productQuantity, unitType, productDescription, flateRate, unitPrice, generalOfferInfoId)
      .subscribe(
      productsToSave => this.productsToSave.push(productsToSave),
      error => this.errorMessage = <any>error );
        
  }

result: any;
addNewOffer()
{
  this.addGeneralOfferInfo(this.selectedOffer.taxPercent, this.selectedOffer.notice, this.selectedOffer.reference, this.selectedOffer.offerGoal, this.selectedOffer.date, this.selectedOffer.factureReference, this.selectedOffer.factureGoal,this.selectId);
  
  
  this.products.productsData.forEach(i => {
    
  this.addProduct(i.productQuantity, i.unitType, i.productDescription, i.flateRate, i.unitPrice, this.result.Id )

  })



}


}





@Pipe({
  name: 'searchPipe',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], args: any): any[] {
    var isSearch = (data: any): boolean => {
      var isAll = false;
      if (typeof data === 'object') {
        for (var z in data) {
          if (isAll = isSearch(data[z])) {
            break;
          }
        }
      } else {
        if (typeof args === 'number') {
          isAll = data === args;
        } else {
          isAll = data.toString().match(new RegExp(args, 'i'));
        }
      }

      return isAll;
    };

    return items.filter(isSearch);
  }
}
