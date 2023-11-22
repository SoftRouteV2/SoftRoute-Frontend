import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

import { shipmentBackend } from '../model/shipmentBackend';

@Injectable({
  providedIn: 'root'
})

export class ShipmentBackendService extends TemplateService<shipmentBackend> {

  private shipment:shipmentBackend | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/shipment';

  }

   getShipmentByCode(code: string): Observable<shipmentBackend> {
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/shipment/code/'+code;
    return this.http.get<shipmentBackend>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    }


}


