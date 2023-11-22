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
  visible: boolean = false;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'change'}),
      password: new FormControl('', { validators:  [Validators.required, Validators.minLength(4), Validators.maxLength(16)], updateOn: 'change' }),
    });
  }

  showDialog() {
    this.visible = true;
  }

  navigateSignInHome() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.loginEmployeeByEmail(email).subscribe((data: any) => {
      this.employee = data;
      if (this.employee?.password == password && this.employee?.email == email) {
        localStorage.setItem('employeeId', JSON.stringify(this.employee?.employeeId));
        this.router.navigate([routes.supplierHome]);
      } else {
        console.log("Password incorrect");
        this.showDialog();
      }
      
    }).add(() => {
      if (this.employee == null) {
        console.log("Employee not found");
        this.showDialog();
      }
    });
  }
  navigateToSignUp() {
    this.router.navigate([routes.signUp]);
  }
}
