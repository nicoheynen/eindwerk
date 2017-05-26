import { Component, OnInit, Input } from '@angular/core';
import { ClientInfo } from "app/client-info/client-info";
import { ClientInfoService } from "app/client-info/client-info.service";

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  @Input() clientInfo: ClientInfo;

constructor(private clientInfoService: ClientInfoService) { }

ngOnInit() {
    this.clientInfo = this.clientInfoService.getClientInfos();
  }

}
