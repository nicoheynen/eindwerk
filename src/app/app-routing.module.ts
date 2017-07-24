import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCompanyInfoComponent } from "app/user-company-info/user-company-info.component";
import { ClientInfoComponent } from "app/client-info/client-info.component";
import { ProductsComponent } from "app/products/products.component";
import { OfferDashboardComponent } from "app/offer-dashboard/offer-dashboard.component";
import { OfferComponent } from "app/offer/offer.component";
import { AppComponent } from "app/app.component";
import { GenOfferInfoComponent } from "app/gen-offer-info/gen-offer-info.component";
import { LoginComponent } from "app/login/login.component";
import { AcompteComponent } from "app/acompte/acompte.component";
import { FactureComponent } from "app/facture/facture.component";
import { AuthGuardService } from "app/auth-guard.service";
import { PortefeuilleComponent } from "app/portefeuille/portefeuille.component";

const routes: Routes = [
  {
    path: 'userCompanyInfo',
    component: UserCompanyInfoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'clientInfo',
    component: ClientInfoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'offerDashboard',
    component: OfferDashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'offer',
    component: OfferComponent,
    canActivate: [AuthGuardService]
  }, 
  {
    path: 'acompte',
    component: AcompteComponent,
    canActivate: [AuthGuardService]
  }, 
  {
    path: 'facture',
    component: FactureComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'generalOfferInfo',
    component: GenOfferInfoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'portefeuille',
    component: PortefeuilleComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers: [AuthGuardService]
})
export class AppRoutingModule { }
