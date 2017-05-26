import { Injectable } from '@angular/core';
import { UserCompanyInfo } from "app/user-company-info/user-company-info";
import { USERCOMPANYINFO } from "app/user-company-info/mock-user-company-info";

@Injectable()
export class UserCompanyInfoService {

 getUserCompanyInfos(): UserCompanyInfo {
    return USERCOMPANYINFO;
  }
}
