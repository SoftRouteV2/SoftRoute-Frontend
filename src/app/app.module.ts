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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    FormsModule,
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
    InputTextModule
  ],
  //add the services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
