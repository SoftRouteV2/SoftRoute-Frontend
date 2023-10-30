import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {routes} from "../../../app-routing.module";
import {AuthService} from "../../services/auth.service";
import { Employee } from '../../model/employee';



@Component({
  selector: 'app-sign-in-administrator',
  templateUrl: './sign-in-administrator.component.html',
  styleUrls: ['./sign-in-administrator.component.css']
})
export class SignInAdministratorComponent{

  email: string='';
  password: string='';
  employee: Employee | null = null;
  constructor(private router: Router, private authService: AuthService) {
  }

  navigateSignInHome() {
    this.authService.loginEmployeeByEmail(this.email).subscribe((data: any) => {
      this.employee = data;
      if (this.employee != null) {
        if (this.employee.password == this.password && this.employee.email == this.email) {
          this.router.navigate([routes.supplierHome]);
        } else {
          alert("Contraseña incorrecta");
        }
      } else {
        alert("El usuario no existe");
      }
    }

    );
  }
  navigateToSignUp() {
    this.router.navigate([routes.signUp]);
  }
}
