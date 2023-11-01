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

  destinations: SelectItem[] = [
    { label: 'Cusco', value: 'Cusco' },
    { label: 'Puno', value: 'Puno' },
    { label: 'Lima', value: 'Lima' },
    { label: 'Cajamarca', value: 'Cajamarca' },
  ];

  selectedDestination: string='';

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



  constructor(private shipmentService: ShipmentService, private senderService: SenderService, private packageService:PackageService ) {

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
      // All form controls are valid, proceed with creating and submitting data to the backend.

      //localStorage.getItem('employeeId');

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

          // Create a Shipment object
          const shipment: Shipment = {
            id: 0,
            description: this.description,
            code: createdSender.id,
            freight: this.freight!,
            quantity: this.quantity!,
            deliveredDate: this.selectedDate,
            arrivalDate: this.selectedDate,
            consignee: this.consigneeName,
          };

          this.shipmentService
            .addShipment(shipment, employeeId, createdSender.id.toString())
            .subscribe((data: any) => {
              if (data) {
                console.log("Shipment added");
                // Create a Package object
                const packageObj: Package = {
                  id: 0,
                  description: this.description,
                  code: createdSender.id,
                  weight: this.packageWeight!,
                  length: this.packageLength!,
                  width: this.packageWidth!,
                  height: this.packageHeight!,
                };

                this.packageService
                  .addPackage(packageObj, data.id)
                  .subscribe((data: any) => {
                    if (data) {
                      console.log("Package added");
                    }
                  });
              } else {
                console.log("Backend error in addShipment");
              }
            });
        } else {
          console.log("Backend error in addSender");
        }
      });
    } else {
      // At least one or more form controls are invalid.
      // You can display an error message or take appropriate action.
      console.log("Form data is incomplete or incorrect. Please check the inputs.");
    }
  }


  createSenderFromJson(sender: any): Sender{
    return {
      id: sender.id,
      fullname: sender.fullname,
      dni: sender.dni
    }
  }


}






