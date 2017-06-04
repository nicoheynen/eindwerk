import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ClientInfo } from "app/client-info/client-info";
import { CLIENTINFO } from "app/client-info/mock-client-info";

@Injectable()
export class ClientInfoService {




  private clientInfoUrl = 'http://localhost:50317/api/';  // URL to web API
  constructor(private http: Http) { }


getSelectedClientInfo(): ClientInfo{
    return CLIENTINFO;

  }

  getClientInfos(): Observable<ClientInfo[]> {
    return this.http.get(this.clientInfoUrl+'ClientInfo')
      .map(clientInfo=>clientInfo.json())
      .catch(this.handleError);
  }

 create(clientNumber: any,
clientName: any,
clientStreetName: any,
clientHouseNumber: any,
clientPostalCode: any,
clientCity: any,
tvaClient: any): Observable<ClientInfo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.clientInfoUrl+'ClientInfo', {clientNumber, clientName , clientStreetName, clientHouseNumber, clientPostalCode, clientCity, tvaClient }, options)
                    .map(clientInfo=>clientInfo.json())
                    .catch(this.handleError);
  }

 // delete(id: number): Observable<ClientInfo> {
   //     var headers = new Headers();  
     //   headers.append('Content-Type', 'application/json; charset=utf-8');  
    //return this.http.delete(this.clientInfoUrl+'ClientInfo/' + id, { headers: headers })
    //  .map(clientInfo=>clientInfo.json())
     // .catch(this.handleError);
  //}
  delete(id) {
    return this.http.delete(this.clientInfoUrl+'ClientInfo/' + id, id)
                        .map(clientInfo=>clientInfo.json())
                    .catch(this.handleError);;
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


