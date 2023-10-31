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

  numberInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  senderEmailFormControl = new FormControl('', [Validators.required, Validators.email]);
  consigneeEmailFormControl = new FormControl('', [Validators.required, Validators.email]);

  documentNumberInput: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{8}$/), // Use a regular expression to validate 8 digits.
  ]);



  constructor(private shipmentService: ShipmentService, private senderService: SenderService, private packageService:PackageService ) { }

  ngOnInit(): void {
  }

  validateShimentData(): void {

      console.log(this.selectedPackageType);
      console.log(this.packageWeight);
      console.log(this.quantity);
      console.log(this.freight);
      console.log(this.description);
      console.log(this.senderName);
      console.log(this.senderEmail);
      console.log(this.consigneeName);
      console.log(this.consigneeEmail);
      console.log(this.selectedDocumentType);
      console.log(this.documentNumber);
      console.log(this.selectedDestination);
      console.log(this.selectedDate);



      //create a Employee object
      const employee: Employee = {
        id: 1,
        name: 'Paolo',
        email: 'paolo@gmail.com',
        password: 'gmailcom@',
        phone: 987654321,
        image: 'url',
        companyId: 1
      }

      this.quantity = 11;

      //create a Sender object
      const sender: Sender = {
        id: 0,
        fullname: this.senderName,
        dni: this.documentNumber!.toString()
      }

      const createdSender = this.senderService.addSender(sender).subscribe( (data: any) => {

          if (data){

            const createdSender: Sender = {
              id: data.senderId,
              fullname: data.fullname,
              dni: data.dni
            };


                 //create a Shipment object
      const shipment: Shipment = {
        id: 0,
        description: this.description,
        code: createdSender.id,                               //THE ERROR WAS HERE, CANT HAVE SAME CODE
        freight: this.freight!,
        quantity: this.quantity!,
        deliveredDate: this.selectedDate,
        arrivalDate: this.selectedDate,
        consignee: this.consigneeName,
      }

      this.shipmentService.addShipment(shipment,employee.id.toString(), createdSender.id.toString()).subscribe( (data: any) => {

        if (data){
          console.log("Shipment added");
            //create a Package object
       const packageObj: Package = {
        id: 0,
        description: this.description,
        code: createdSender.id,                                 //THE ERROR WAS HERE, CANT HAVE SAME CODE
        weight: this.packageWeight!,
        length: this.packageLength!,
        width: this.packageWidth!,
        height: this.packageHeight!,
       }

       this.packageService.addPackage(packageObj, data.id).subscribe( (data: any) => {
         if (data){
           console.log("Package added");
       }
         }     );
        }else{
          console.log("Backend error in addShipment");
        }

      }
      );


          }else{
            console.log("Backend error in addSender");
          }

        }
      );















  }

  createSenderFromJson(sender: any): Sender{
    return {
      id: sender.id,
      fullname: sender.fullname,
      dni: sender.dni
    }
  }


}






