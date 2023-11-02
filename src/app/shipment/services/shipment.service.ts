import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
 import { Shipment } from '../model/shipment';
import { Package } from '../model/package';

@Injectable({
  providedIn: 'root'
})

export class ShipmentService extends TemplateService<Shipment> {

  private shipment:Shipment | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8090/api/v1/shipment';

  }

  addShipment(shipment: Shipment, employeeId: String, senderId: String): Observable<Shipment> {
     this.basePath = 'http://localhost:8090/api/v1/shipment?employeeId='+employeeId+'&senderId='+senderId;
     return this.create(shipment);
  }


  /*
  return this.http.get<T>(
      `${this.basePath}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  */

   getShipmentByCode(code: string): Observable<Shipment> {
    this.basePath = 'http://localhost:8090/api/v1/shipment/code/'+code;
    return this.http.get<Shipment>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
    }


}


