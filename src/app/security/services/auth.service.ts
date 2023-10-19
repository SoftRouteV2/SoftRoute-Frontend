import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Employee} from "../model/employee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends TemplateService<Employee>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/employee';
  }
}
