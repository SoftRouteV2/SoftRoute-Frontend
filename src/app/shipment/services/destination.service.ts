import { Injectable } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';
import { Destination } from '../model/destination';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService extends TemplateService<Destination> {

  private destination:Destination | null=null;
  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'https://sofroute.azurewebsites.net/api/v1/destination';

  }

   addDestination(destination: Destination): Observable<Destination> {
    return this.create(destination);
   }
}
