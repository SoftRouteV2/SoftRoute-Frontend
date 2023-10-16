import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoftRoute-Frontend';
  profile = 'supplier';
  id = 1;
  options = [
    { path: `/supplier-home/${this.id}`, title: 'Home'},
    { path: '', title: 'Plans'},
    { path: '', title: 'Notifications'},
    { path: `/supplier-inventory/${this.id}`, title: 'Inventory'},
    { path: `/supplier-profile/${this.id}`, title: 'Profile'}
  ]
  /*Store*/
  options2 = [
    { path: `/store-home/${this.id}`, title: 'Home'},
    { path: '', title: 'Orders'},
    { path: '', title: 'Notifications'},
    { path: `/store-profile/${this.id}`, title: 'Profile'}
  ]
}
