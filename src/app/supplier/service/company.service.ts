import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Company} from "../model/company";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends TemplateService<Company>{
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/companies';
  }
}
