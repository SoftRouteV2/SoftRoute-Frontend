import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {routes} from "../../../app-routing.module";


@Component({
  selector: 'app-sign-in-administrator',
  templateUrl: './sign-in-administrator.component.html',
  styleUrls: ['./sign-in-administrator.component.css']
})
export class SignInAdministratorComponent {

  constructor(private router: Router) { }

  navigateToHomeSupplier() {
    this.router.navigate([routes.supplierHome]);
  }

  navigateToSignUp() {
    this.router.navigate([routes.signUp]);
  }
}
