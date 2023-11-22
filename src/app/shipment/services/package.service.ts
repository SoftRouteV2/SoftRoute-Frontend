import { Injectable } from '@angular/core';
import { Package } from '../model/package';
import { TemplateService } from 'src/app/shared/services/template.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService extends TemplateService<Package> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8090/api/v1/shipments';
   }

   addPackage(packageObj: Package, shipmentId: String) : Observable<Package>{

    this.basePath = 'http://localhost:8090/api/v1/shipments/'+shipmentId+'/packages';
    return this.create(packageObj);
  }
}
