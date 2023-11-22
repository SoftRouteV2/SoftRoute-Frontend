import { Component } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment/services/shipment.service';
import { Shipment } from 'src/app/shipment/model/shipment';
import { Package } from 'src/app/shipment/model/package';
import { Destination } from 'src/app/shipment/model/destination';
import { ShipmentBackendService } from 'src/app/shipment/services/shipment-backend.service';
import { shipmentBackend } from 'src/app/shipment/model/shipmentBackend';

@Component({
  selector: 'app-tracking-shipment',
  templateUrl: './tracking-shipment.component.html',
  styleUrls: ['./tracking-shipment.component.css']
})
export class TrackingShipmentComponent {

  constructor(private router: Router, private shipmentService: ShipmentBackendService) { }

  shipmentCode: string = '';
  shipment : shipmentBackend | null = null;
  package : Package | null = null;
  destination: Destination | null = null;


  //wanna set data in init
  ngOnInit(): void {
    this.shipmentCode = localStorage.getItem('shipmentCode')!;
    //this.getPackages();
    this.getShipment();

  }

  navigateToback() {
    window.history.back();
  }
  navigateToSignClient() {
    this.router.navigate([routes.signInClient]);
  }



  getShipment() {
    this.shipmentService.getShipmentByCode(this.shipmentCode).subscribe( (shipmentBack) => {

      if (shipmentBack == null) {
        alert('Shipment code not found');
        return;
      }

      this.shipment = shipmentBack as shipmentBackend;
      this.destination = this.shipment.destination;

    }, (error) => {
      alert('Shipment code not found');
      return;
    });


  }





}





