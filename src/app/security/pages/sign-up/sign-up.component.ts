import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';
import {EmployeeService} from "../../../supplier/service/employee.service";
import {CompanyService} from "../../../supplier/service/company.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../supplier/model/employee";
import {Company} from "../../../supplier/model/company";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  rucCompany: number=0;
  password2: any;
  employees: Employee[] = [];
  newEmployee: Employee = {
    id: 0, // Inicializa en 0 para que se calcule el nuevo id automáticamente
    name: '',
    email: '',
    password: '',
    phone: 0,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    companyId: 0
  };

  constructor(private router: Router, private employeeService:EmployeeService,
              private companyService:CompanyService, private messageService:MessageService) {


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

  addEmployee(employee:Employee) {

    this.companyService.getAll().subscribe(x => {
      const matchingCompany = x.find((y: Company) => {
        return y.ruc === this.rucCompany;
      });
      if (matchingCompany) {
        if (employee.password==this.password2)
        {
          this.employeeService.getAll().subscribe((response:any)=>{
            this.employees=response;
            employee.id = this.employees.length + 1;
          })
          this.showNewEmployeeSuccess();
          employee.companyId=matchingCompany.id;
          this.employeeService.create(employee).subscribe();
          this.navigateToLogin();
        }else{
          console.log('Password does not match');
          this.showErrorPassWord();
        }
      }else{
        console.log(' Ruc does not exist in the system');
        this.showErrorRucCompany();
      }
    });

  }
  }
