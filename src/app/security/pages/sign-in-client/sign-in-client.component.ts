import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';
@Component({
  selector: 'app-sign-in-client',
  templateUrl: './sign-in-client.component.html',
  styleUrls: ['./sign-in-client.component.css']
})
export class SignInClientComponent {
  constructor(private router: Router) { }

  navigateToback() {
    this.router.navigate([routes.login]);
  }

  verifyNavigateToShipmentInformation() {
    this.router.navigate([routes.trackingShipment]);
  }

  verifyGetShipmentByCode() {
    
  }
}
