import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from "app/auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 pass:any;
 name: any;
   get loggedIn () {
    return this.authGuardService.isLoggedIn;
  };
  constructor(private authGuardService: AuthGuardService) { }
  toggleLoggedIn() {
   if (this.pass == "test" && this.name == "test"){
    this.authGuardService.isLoggedIn = true;
  }
  
  }

  ngOnInit() {
  }

}
