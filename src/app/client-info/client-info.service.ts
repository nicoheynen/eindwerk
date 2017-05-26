import { Injectable } from '@angular/core';
import { CLIENTINFO } from "app/client-info/mock-client-info";
import { ClientInfo } from "app/client-info/client-info";

@Injectable()
export class ClientInfoService {

  getClientInfos() :ClientInfo{
    return CLIENTINFO;
  }

}
