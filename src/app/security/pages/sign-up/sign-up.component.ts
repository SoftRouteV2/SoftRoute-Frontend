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
  rucCompany: number=0;
  password2: any;
  employees: Employee[] = [];
  newEmployee: Employee;

  companies: Array<Company> = [];
  selectedCompany: Company;
  registerForm!: FormGroup;

  constructor(private router: Router, private employeeService:EmployeeService,
    private companyService:CompanyService, private messageService:MessageService, 
    private authService : AuthService, private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      company: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });

    this.selectedCompany = {} as Company;
    this.newEmployee = {} as Employee;

  }

  ngOnInit(): void {
    this.authService.getAllCompanies().subscribe((data: Company[]) => {
      this.companies = data; // Guarda todas las empresas en this.companies      
      this.selectedCompany = this.companies[0];
    });
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
    this.authService.postEmployee(this.newEmployee, this.selectedCompany.companyId).subscribe((data: Employee) => {
      this.newEmployee = data;
      this.showNewEmployeeSuccess();
      this.navigateToLogin();
    });
    
  }
    
}
