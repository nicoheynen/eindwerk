import { Component, OnInit, Input } from '@angular/core';
import { ImageResult } from "ng2-imageupload";
import { UserCompanyInfo } from "app/user-company-info/user-company-info";
import { UserCompanyInfoService } from "app/user-company-info/user-company-info.service";

@Component({
  selector: 'app-user-company-info',
  templateUrl: './user-company-info.component.html',
  styleUrls: ['./user-company-info.component.css']
})
export class UserCompanyInfoComponent implements OnInit {

  userCompanyInfo: UserCompanyInfo;

  @Input() savedUserCompanyInfo: UserCompanyInfo;

  
  //errorMessage: string;
  // mode = 'Observable';


  constructor(private userCompanyInfoService: UserCompanyInfoService) { }


  ngOnInit() {

   
    this.userCompanyInfo = this.userCompanyInfoService.getUserCompanyInfos();
 //this.getSavedUserCompanyInfos();
    
    

  }



  selected(imageResult: ImageResult) {
    this.userCompanyInfo.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }


/*
  getSavedUserCompanyInfos() {

    this.userCompanyInfoService.getSavedUserCompanyInfos()
      .subscribe(
      savedUserCompanyInfo => {
        console.log('0001', savedUserCompanyInfo);
        this.savedUserCompanyInfo = savedUserCompanyInfo;
        this.userCompanyInfo.companyName = savedUserCompanyInfo.companyName;
      },
      error => this.errorMessage = <any>error);
  }*/



}
