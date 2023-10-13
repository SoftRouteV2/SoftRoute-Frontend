import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/supplier-home' },
    { label: 'Plans', icon: 'pi pi-calendar', routerLink: '/supplier-plan' },
    { label: 'Notifications', icon: 'pi pi-bell', routerLink: '' },
    { label: 'Inventory', icon: 'pi pi-shopping-cart', routerLink: '/supplier-inventory' },
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/supplier-profile' }
  ];

  ngOnInit(): void {
  };


}



