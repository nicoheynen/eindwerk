import { Component, OnInit, Input, Pipe, PipeTransform, Injectable } from '@angular/core';
import { ClientInfo } from "app/client-info/client-info";
import { ClientInfoService } from "app/client-info/client-info.service";


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  errorMessage: string;
  mode = 'Observable';
  clientInfo = <ClientInfo[]>Array();
  selectedClient: ClientInfo;
  selectId: any;

  constructor(private clientInfoService: ClientInfoService) { }

  ngOnInit() {
    this.getClientInfos();
    this.selectedClient = this.clientInfoService.getSelectedClientInfo();
    
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

  // delete(id: number) {
  // this.clientInfoService.delete(id)
  //.subscribe(
  //clientInfo => this.clientInfo.splice(id, 1),
  //    error => this.errorMessage = <any>error);

  //}
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

  }



}

@Pipe({
  name: 'searchPipe',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(items:any[], args:any):any[] {
		var isSearch = (data:any): boolean => {
			var isAll = false;
			if(typeof data === 'object' ){
				for (var z in data) {
					if(isAll = isSearch(data[z]) ){
						break;
					}
				}
			} else {
				if(typeof args === 'number'){
					isAll = data === args;
				} else {
					isAll = data.toString().match( new RegExp(args, 'i') );
				}
			} 

			return isAll;
		};

		return items.filter(isSearch);
	}
}