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
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/employee';
  }
}
