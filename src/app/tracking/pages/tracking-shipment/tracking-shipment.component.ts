import { Component } from '@angular/core';
import { routes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking-shipment',
  templateUrl: './tracking-shipment.component.html',
  styleUrls: ['./tracking-shipment.component.css']
})
export class TrackingShipmentComponent {

  constructor(private router: Router) { }

  navigateToback() {
    window.history.back();
  }
  navigateToSignClient() {
    this.router.navigate([routes.signInClient]);
  }

}





