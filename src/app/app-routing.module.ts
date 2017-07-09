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

const routes: Routes = [
  {
    path: 'userCompanyInfo',
    component: UserCompanyInfoComponent
  },
  {
    path: 'clientInfo',
    component: ClientInfoComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
      path: 'offerDashboard',
      component: OfferDashboardComponent
  },
  {
      path: 'offer',
      component: OfferComponent
  },
   {
      path: 'app',
      component: AppComponent
  },
  {
      path: 'generalOfferInfo',
      component: GenOfferInfoComponent
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
  providers: []
})
export class AppRoutingModule { }
