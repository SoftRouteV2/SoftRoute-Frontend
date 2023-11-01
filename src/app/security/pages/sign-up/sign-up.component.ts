import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';

import { FormBuilder,
         FormControl,
         FormGroup,
         NgForm,
         Validators,
         ValidationErrors
       } from "@angular/forms";

import {EmployeeService} from "../../../supplier/service/employee.service";
import {CompanyService} from "../../../supplier/service/company.service";

import {Employee} from "src/app/security/model/employee";
import { Company } from 'src/app/security/model/company';
import {MessageService} from "primeng/api";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  newEmployee: Employee;

  companies: Array<Company> = [];
  selectedCompany: Company;
  registerForm!: FormGroup;
  visible: boolean = false;
  visible2: boolean = false;
  registered: boolean = false;

  constructor(private router: Router, private employeeService:EmployeeService,
    private companyService:CompanyService, private messageService:MessageService, 
    private authService : AuthService, private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      employeeName: new FormControl('', Validators.required), updateOn: 'change',
      email: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'change'}),
      dni: new FormControl('', {validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'change'}),
      password: new FormControl('', { validators:  [Validators.required, Validators.minLength(4), Validators.maxLength(16)], updateOn: 'change' }),
      confirmPassword: new FormControl('', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(16)], updateOn: 'change'}),
    },
    {
      validators: this.MustMatch( 'password', 'confirmPassword')
    },
    );
    this.selectedCompany = {} as Company;
    this.newEmployee = {} as Employee;

  }

  ngOnInit(): void {
    this.authService.getAllCompanies().subscribe((data: Company[]) => {
      this.companies = data; // Guarda todas las empresas en this.companies      
      this.selectedCompany = this.companies[0];
    });
  }

  showDialog() {
    this.visible = true;
  }
  showDialog2() {
    this.visible = true;
  }

  MustMatch( password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const passwordConfirmControl = formGroup.controls[confirmPassword];

      if (passwordConfirmControl.errors && !passwordConfirmControl.errors['mustMatch']) {
        return;
      }
      if (passwordControl.value !== passwordConfirmControl.value) {
        passwordConfirmControl.setErrors({ MustMatch: true });
      } else {
        passwordConfirmControl.setErrors(null);
      }
    };
  }
  

  showErrorPassWord() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match' });
  }
  showErrorRucCompany() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The company ruc is not registered' });
  }
  showNewEmployeeSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'created without problems' });
  }
  navigateToLogin() {
    this.router.navigate([routes.login]);
  }

  addEmployee() {
    console.log(this.newEmployee);
    console.log(this.selectedCompany.companyId);
    if(this.registerForm.valid){

      this.newEmployee.employeeId = 0;
      this.newEmployee.dni = this.registerForm.value.dni;
      this.newEmployee.employeeName = this.registerForm.value.employeeName;
      this.newEmployee.password = this.registerForm.value.password;
      this.newEmployee.email = this.registerForm.value.email;
      this.verifyUserUnregistered();
      if(!this.registered) {
        this.authService.postEmployee(this.newEmployee, this.selectedCompany.companyId).subscribe((data: Employee) => {
          this.newEmployee = data;
          this.showNewEmployeeSuccess();
          this.showDialog2();
          setTimeout(() => {
            this.navigateToLogin();
          }, 3000);
        });
      }
      else {
        this.showDialog();
      }
    }
    
  }

  verifyUserUnregistered() {
    this.registered = false;
    var req = new XMLHttpRequest();
    req.open('GET', `http://localhost:8081/api/v1/employee/email/${this.registerForm.get("email")?.value}`, false);
    req.send(null);
    if (req.status == 200) {
      var user = JSON.parse(req.responseText);
      if (user.email == this.registerForm.get('email')?.value) {
        this.registered = true;
      }
    }
    
  }
    
}
