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
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/company';
  }
}
