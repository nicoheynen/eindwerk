import { Injectable } from '@angular/core';
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";
import { GENERALINFO } from "app/gen-offer-info/mock-general-offer-info";

@Injectable()
export class GeneralOfferInfoService {

  getGeneralInfo(): GeneralOfferInfo{
    return GENERALINFO;

  }

}
