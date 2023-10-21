import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TemplateService} from "../../shared/services/template.service";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends TemplateService<Employee>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/employees';
  }
}
