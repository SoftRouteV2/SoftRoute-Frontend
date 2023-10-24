import { Component } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
