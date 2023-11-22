import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import {Sender} from "../../model/sender";
import {Package} from "../../model/package";
import {Shipment} from "../../model/shipment";
import {Employee} from "../../../supplier/model/employee";
import { ShipmentService } from '../../services/shipment.service';
import { SenderService } from '../../services/sender.service';
import { PackageService } from '../../services/package.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Destination } from '../../model/destination';
import { DestinationService } from '../../services/destination.service';



@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent {

  description: string='';
  senderName: string='';
  senderEmail: string='';
  consigneeName: string='';
  consigneeEmail: string='';
  selectedDate: Date=new Date();
  shipmentCode: number=0;

  destinations: SelectItem[] = [
    { label: 'Cusco', value: 'Cusco' },
    { label: 'Puno', value: 'Puno' },
    { label: 'Lima', value: 'Lima' },
    { label: 'Cajamarca', value: 'Cajamarca' },
  ];

  selectedDestination: { value: string } = { value: '' };
  selectedOrigin: { value: string } = { value: '' };

  documentTypes: SelectItem[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Carnet de extranjeria', value: 'Carnet de extranjeria' },
    { label: 'Pasaporte', value: 'Pasaporte' }
  ];

  selectedDocumentType: string='';
  packageTypes: SelectItem[] = [
    { label: 'Caja', value: 'Caja' },
    { label: 'Sobre', value: 'Sobre' },
    { label: 'Bolsa', value: 'Bolsa' }
  ];
  selectedPackageType: string='';
  packageWeight: number | undefined;
  packageHeight: number | undefined;
  packageWidth: number | undefined;
  packageLength: number | undefined;

  quantity: number| undefined;
  freight: number | undefined;
  documentNumber: number | undefined;

  weightInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  heightInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  widthInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  lengthInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  freightInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  descriptionInput: FormControl = new FormControl('', [Validators.required]);
  dateInput: FormControl = new FormControl('', [Validators.required]);
  senderNameInput: FormControl = new FormControl('', [Validators.required]);
  consigneeNameInput: FormControl = new FormControl('', [Validators.required]);
  senderEmailFormControl = new FormControl('', [Validators.required, Validators.email]);
  consigneeEmailFormControl = new FormControl('', [Validators.required, Validators.email]);
  documentNumberInput: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{8}$/), // Use a regular expression to validate 8 digits.
  ]);


  displayModal: boolean = false;
  displayErrorModal: boolean = false;


  constructor(private shipmentService: ShipmentService,
     private senderService: SenderService,
      private packageService:PackageService,
      private destinationService: DestinationService,
      private router: Router) {

  }

  ngOnInit(): void {
  }


  validateShipmentData(): void {

    if (
      this.weightInput.valid &&
      this.heightInput.valid &&
      this.widthInput.valid &&
      this.lengthInput.valid &&
      this.freightInput.valid &&
      this.descriptionInput.valid &&
      this.dateInput.valid &&
      this.senderNameInput.valid &&
      this.consigneeNameInput.valid &&
      this.documentNumberInput.valid
    ) {

      const employeeId = localStorage.getItem('employeeId') as string;
      console.log(employeeId);
      this.quantity = 1;

        // Create a Sender object
      const sender: Sender = {
        id: 0,
        fullname: this.senderName,
        dni: this.documentNumber!.toString(),
      };

      this.senderService.addSender(sender).subscribe((data: any) => {
        if (data) {
          const createdSender: Sender = {
            id: data.senderId,
            fullname: data.fullname,
            dni: data.dni,
          };

          const stringDate = this.selectedDate.toString();
          this.shipmentCode = this.generatedShipmentCode(createdSender.id, stringDate) ;


          const destionation : Destination = {
            destinationId: 0,
            departure: this.selectedOrigin.value,
            arrival: this.selectedDestination.value
          }

          this.destinationService.addDestination(destionation).subscribe((destination: any) => {
            if (destination) {

           const shipment: Shipment = {
            id: 0,
            description: this.description,
            code: this.shipmentCode,
            freight: this.freight!,
            quantity: this.quantity!,
            deliveredDate: this.selectedDate,
            arrivalDate: this.selectedDate,
            consignee: this.consigneeName,
          };

          this.shipmentService
            .addShipment(shipment, employeeId, createdSender.id.toString(), destination.destinationId.toString())
            .subscribe((data: any) => {
              if (data) {

                // Create a Package object
                const packageObj: Package = {
                  id: 0,
                  description: this.description,
                  code: this.shipmentCode,
                  weight: this.packageWeight!,
                  length: this.packageLength!,
                  width: this.packageWidth!,
                  height: this.packageHeight!,
                };

                this.packageService
                  .addPackage(packageObj, data.id)
                  .subscribe((data: any) => {
                    if (data) {
                      this.showShipmentCode();
                    }
                  });
              } else {
                console.log("Backend error in addShipment");
              }
            });


            }else
            {
              console.log("Backend error in addDestination");
            }
          });









        } else {
          console.log("Backend error in addSender");
        }
      });
    } else {
       this.displayErrorModal = true;
    }
  }


  createSenderFromJson(sender: any): Sender{
    return {
      id: sender.id,
      fullname: sender.fullname,
      dni: sender.dni
    }
  }

  showShipmentCode(){
    this.displayModal = true;
  }

  generatedShipmentCode(senderId: number, date: string): number {
    const senderIdStr = senderId.toString().slice(0, 3).padEnd(3, '0'); // Changed from .slice(-3) to .slice(0, 3)
    console.log(senderIdStr);
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Invalid date object');
    }
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString();
    const shipmentCode = parseInt(senderIdStr + month + day);
    return shipmentCode;
}


  navigateToHome() {
    this.router.navigate([routes.supplierHome]);
  }

}






