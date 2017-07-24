import { Component, OnInit, Input } from '@angular/core';
import { GeneralOfferInfoService } from "app/gen-offer-info/general-offer-info.service";
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";

@Component({
  selector: 'app-gen-offer-info',
  templateUrl: './gen-offer-info.component.html',
  styleUrls: ['./gen-offer-info.component.css']
})
export class GenOfferInfoComponent implements OnInit {

generalInfo: GeneralOfferInfo ;

  constructor(private generalOfferInfoService: GeneralOfferInfoService) { }

  ngOnInit(): void {
    this.generalInfo = this.generalOfferInfoService.getGeneralInfo();

  }
  
}
