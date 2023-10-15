import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SupplierHomeComponent} from "./supplier/pages/supplier-home/supplier-home.component";
import {LoginComponent} from "./security/pages/login/login.component";
import {SupplierProfileComponent} from "./supplier/pages/supplier-profile/supplier-profile.component";


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'supplier-home', component:SupplierHomeComponent },
  { path: 'supplier-profile', component:SupplierProfileComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
