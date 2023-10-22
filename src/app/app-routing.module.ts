import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./supplier/pages/supplier-home/supplier-home.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {SupplierProfileComponent} from "./supplier/pages/supplier-profile/supplier-profile.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {SignInAdministratorComponent} from "./security/pages/sign-in-administrator/sign-in-administrator.component";
import {SignInClientComponent} from "./security/pages/sign-in-client/sign-in-client.component";
import {CustomerTrackingComponent} from "./tracking/pages/customer-tracking/customer-tracking.component";


export const routes = {
  login: 'login',
  signUp: 'sign-up',
  supplierHome: 'supplier-home',
  supplierProfile: 'supplier-profile',
  signInAdministrator: 'sign-in-administrator',
  signInClient: 'sign-in-client',
  customerTracking: 'customer-tracking'
};
const appRoutes: Routes = [
  { path: '', redirectTo: routes.login, pathMatch: 'full' },
  { path: routes.login, component:LoginComponent,title:'login' },
  { path: routes.signUp, component:SignUpComponent },
  { path: routes.supplierHome, component:SupplierHomeComponent },
  { path: routes.supplierProfile, component:SupplierProfileComponent },
  { path: routes.signInAdministrator, component:SignInAdministratorComponent },
  { path: routes.signInClient, component:SignInClientComponent },
  { path: routes.customerTracking, component:CustomerTrackingComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
