import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css'],
})
export class SupplierProfileComponent {
  visible: boolean = false;
  nombre: string = '';
  email: string = '';
  contrasena: string = '';

  showDialog() {
    this.visible = true;
  }

  protected readonly innerWidth = innerWidth;
}
