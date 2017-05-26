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

 @Input() userCompanyInfo: UserCompanyInfo;

 
  constructor(private userCompanyInfoService:UserCompanyInfoService ) { }


  ngOnInit() {
    this.userCompanyInfo = this.userCompanyInfoService.getUserCompanyInfos();
  }
  

  selected(imageResult: ImageResult) {
     this.userCompanyInfo.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

}
