import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';


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



  constructor() { }

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

  }


}






