import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Add component*/
import {AppRoutingModule} from './app-routing.module';
/*import {InventoryComponent} from './inventory/pages/inventory/inventory.component';
import {SignInComponent} from './security/pages/sign-in/sign-in.component';
import {SignUpComponent} from './security/pages/sign-up/sign-up.component';
import {StoreHomeComponent} from './store/pages/store-home/store-home.component';
import {SupplierHomeComponent} from './supplier/pages/supplier-home/supplier-home.component';
import { SupplierProfileComponent } from './supplier/pages/supplier-profile/supplier-profile.component';
*/
import {HttpClientModule} from "@angular/common/http";


import {NgOptimizedImage} from "@angular/common";
import { SupplierHomeComponent } from './supplier/pages/supplier-home/supplier-home.component';
import { LoginComponent } from './security/pages/login/login.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import { MenubarModule } from 'primeng/menubar';
import { SupplierProfileComponent } from './supplier/pages/supplier-profile/supplier-profile.component';
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import {CheckboxModule} from "primeng/checkbox";
import { SignInAdministratorComponent } from './security/pages/sign-in-administrator/sign-in-administrator.component';
import { SignInClientComponent } from './security/pages/sign-in-client/sign-in-client.component';
import { CustomerTrackingComponent } from './tracking/pages/customer-tracking/customer-tracking.component';
import { MapLocationComponent } from './shared/component/map-location/map-location.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import {MessageService} from "primeng/api";
/*import {SuppliersService} from "./supplier/services/suppliers.service";
import { SupplierEditProfileComponent } from './supplier/pages/supplier-edit-profile/supplier-edit-profile.component';
import { StoreProfileComponent } from './store/pages/store-profile/store-profile.component';
import {StoresService} from "./store/services/stores.service";
import { StoreEditProfileComponent } from './store/pages/store-edit-profile/store-edit-profile.component';
import { StoreSupplierProfileComponent } from './store/pages/store-supplier-profile/store-supplier-profile.component';
import { EditProductComponent } from './inventory/pages/edit-product/edit-product.component';

import { AddProductComponent } from './inventory/pages/add-product/add-product.component';
import {ProductsService} from "./inventory/services/products.service";
import { ProductsSearchComponent } from './store/pages/products-search/products-search.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    SupplierHomeComponent,
    LoginComponent,
    NavbarComponent,
    SupplierProfileComponent,
    SignUpComponent,
    SignInAdministratorComponent,
    SignInClientComponent,
    CustomerTrackingComponent,
    MapLocationComponent,
   /* InventoryComponent,
    SignInComponent,
    SignUpComponent,
    StoreHomeComponent,
    SupplierHomeComponent,
    SupplierProfileComponent,
    SupplierEditProfileComponent,
    StoreSupplierProfileComponent,
    EditProductComponent,
    AddProductComponent,
    ProductsSearchComponent,
    StoreProfileComponent,
    StoreEditProfileComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    CarouselModule,
    TagModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    ToastModule,
    DialogModule,
    KeyFilterModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    MessageModule,
    MessagesModule
  ],
  //add the services
  providers: [MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
