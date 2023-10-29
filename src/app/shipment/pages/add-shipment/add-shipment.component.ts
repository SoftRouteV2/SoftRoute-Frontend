import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


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
  destinations = ["Cusco", "Puno", "Lima", "Cajamarca"]
  selectedDestination: string='';
  documentTypes = ["DNI", "Carnet de extranjeria", "Pasaporte"]
  selectedDocumentType: string='';
  packageTypes = ["Caja", "Sobre", "Bolsa"]
  selectedPackageType: string='';
  packageWeight: number | undefined;
  quantity: number| undefined;
  freight: number | undefined;
  documentNumber: number | undefined;

  numberInput: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]);
  senderEmailFormControl = new FormControl('', [Validators.required, Validators.email]);
  consigneeEmailFormControl = new FormControl('', [Validators.required, Validators.email]);



  constructor() { }

  ngOnInit(): void {
  }

  validateShimentData(): void {


  }


}






