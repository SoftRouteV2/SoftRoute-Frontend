import { Injectable } from '@angular/core';
import { Sender } from '../model/sender';
import { TemplateService } from 'src/app/shared/services/template.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenderService extends TemplateService<Sender> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8090/api/v1/sender';
  }

  addSender(sender: Sender): Observable<Sender> {
    return this.create(sender);
  }

}
