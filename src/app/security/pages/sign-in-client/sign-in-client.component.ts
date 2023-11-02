import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';
import { FormControl, Validators } from '@angular/forms';
import { ShipmentService } from 'src/app/shipment/services/shipment.service';
@Component({
  selector: 'app-sign-in-client',
  templateUrl: './sign-in-client.component.html',
  styleUrls: ['./sign-in-client.component.css']
})
export class SignInClientComponent {
  constructor(private router: Router, private shipmentService: ShipmentService) { }

  shipmentCode: string = '';
  shipmentCodeInput = new FormControl('', Validators.required);
  displayErrorModal: boolean = false;
  displayCodeErrorModal : boolean = false;

  navigateToback() {
    this.router.navigate([routes.login]);
  }

  verifyNavigateToShipmentInformation() {


    if (this.shipmentCodeInput.value == '') {
      this.displayCodeErrorModal = true;
      return;
    }

    this.shipmentService.getShipmentByCode(this.shipmentCodeInput.value!).subscribe( (shipment) => {

      if (shipment == null) {
         this.displayErrorModal = true;
        return;
      }

      console.log(shipment);
      localStorage.setItem('shipmentCode', this.shipmentCodeInput.value!);
      this.router.navigate([routes.trackingShipment]);

    }, (error) => {
      this.displayErrorModal = true;
      return;
    });


  }


}
