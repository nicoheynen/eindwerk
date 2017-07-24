import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";
import { GENERALINFO } from "app/gen-offer-info/mock-general-offer-info";

@Injectable()
export class GeneralOfferInfoService {

  private generalOfferInfoUrl = 'http://localhost:50317/api/';  // URL to web API
  constructor(private http: Http) { }

  getGeneralInfo(): GeneralOfferInfo {
    return GENERALINFO;

  }


  create(taxPercent: any,
    notice: any,
    reference: any,
    offerGoal: any,
    date: any,
    factureReference: any,
    factureGoal: any,
    clientInfoId: any): Observable<GeneralOfferInfo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.generalOfferInfoUrl + 'GeneralOfferInfo', { taxPercent, notice, reference, offerGoal, date, factureReference, factureGoal, clientInfoId }, options)
      .map(generalOfferInfo => generalOfferInfo.json())
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
  }
}
