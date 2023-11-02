

import {Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment/services/shipment.service';

@Component({
  selector: 'app-customer-tracking',
  templateUrl: './customer-tracking.component.html',
  styleUrls: ['./customer-tracking.component.css']
})
export class CustomerTrackingComponent {

  shipmentCode: string = '';

  constructor(private router: Router, private shipmentService: ShipmentService) { }

  




}
