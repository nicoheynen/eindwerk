
import { UserCompanyInfo } from "app/user-company-info/user-company-info";
import { USERCOMPANYINFO } from "app/user-company-info/mock-user-company-info";
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserCompanyInfoService {


private userCompanyInfoUrl = 'http://localhost:50317/api/';  // URL to web API
constructor(private http: Http) { }

 getUserCompanyInfos(): UserCompanyInfo {
    return USERCOMPANYINFO;
  }
  /*
    getSavedUserCompanyInfos(): Observable<UserCompanyInfo> {
    return this.http.get(this.userCompanyInfoUrl+'UserCompanyInfo')
      .map(userCompanyInfo=>userCompanyInfo.json())
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
  }*/



}

