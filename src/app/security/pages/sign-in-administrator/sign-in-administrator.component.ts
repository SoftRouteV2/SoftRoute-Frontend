import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {routes} from "../../../app-routing.module";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-sign-in-administrator',
  templateUrl: './sign-in-administrator.component.html',
  styleUrls: ['./sign-in-administrator.component.css']
})
export class SignInAdministratorComponent{

  email: string='';
  password: string='';
  employees: any[] =[];
  constructor(private router: Router, private authService: AuthService) {
  }

  navigateSignInHome() {
    this.authService.loginEmployee(this.email, this.password).subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate([routes.supplierHome]);
      } else {
        console.log("No coincide");
      }
    });
  }
  navigateToSignUp() {
    this.router.navigate([routes.signUp]);
  }
}
