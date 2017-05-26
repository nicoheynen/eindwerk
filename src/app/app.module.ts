import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";


import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import {Autosize} from 'angular2-autosize/angular2-autosize';
import { ImageUploadModule } from 'ng2-imageupload';
import { UserCompanyInfoComponent } from './user-company-info/user-company-info.component';
import { UserCompanyInfoService } from "app/user-company-info/user-company-info.service";
import { ClientInfoComponent } from './client-info/client-info.component';
import { ProductsComponent } from './products/products.component';

import { RouterModule }   from '@angular/router';
import { OfferDashboardComponent } from './offer-dashboard/offer-dashboard.component';
import { ClientInfoService } from "app/client-info/client-info.service";
import { ProductsService } from "app/products/products.service";
import { AppRoutingModule } from "app/app-routing.module";
import { GenOfferInfoComponent } from './gen-offer-info/gen-offer-info.component';
import { GeneralOfferInfoService } from "app/gen-offer-info/general-offer-info.service";




@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    Autosize,
    UserCompanyInfoComponent,
    ClientInfoComponent,
    ClientInfoComponent,
    ProductsComponent,
    OfferDashboardComponent,
    GenOfferInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ImageUploadModule,
    AppRoutingModule,
    CommonModule
  ],
    providers: [UserCompanyInfoService, ClientInfoService, ProductsService, GeneralOfferInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
