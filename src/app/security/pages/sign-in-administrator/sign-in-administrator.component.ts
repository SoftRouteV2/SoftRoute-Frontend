import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {routes} from "../../../app-routing.module";
import {AuthService} from "../../services/auth.service";
import { Employee } from '../../model/employee';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';



@Component({
  selector: 'app-sign-in-administrator',
  templateUrl: './sign-in-administrator.component.html',
  styleUrls: ['./sign-in-administrator.component.css']
})
export class SignInAdministratorComponent{

  employee: Employee | null = null;

  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'change'}),
      password: new FormControl('', { validators:  [Validators.required, Validators.minLength(4), Validators.maxLength(16)], updateOn: 'change' }),
    });
  }

  navigateSignInHome() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.loginEmployeeByEmail(email).subscribe((data: any) => {
      this.employee = data;
      if (this.employee != null) {
        if (this.employee.password == password && this.employee.email == email) {
          localStorage.setItem('employeeId', JSON.stringify(this.employee.employeeId));
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
