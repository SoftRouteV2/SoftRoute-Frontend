import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isMobileScreen: boolean = window.innerWidth <= 768;

  options = [
    { path: `/supplier-home`, title: 'Home', icon: 'home' },
    { path: `/supplier-plan`, title: 'Plans', icon: 'event_note' },
    { path: '', title: 'Notifications', icon: 'notifications' },
    { path: `/supplier-inventory`, title: 'Inventory', icon: 'store' },
    { path: `/supplier-profile`, title: 'Profile', icon: 'person' }
  ];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileScreen = event.target.innerWidth <= 768; // Actualizar la variable cuando cambia el tamaño de la ventana
  }

  ngOnInit(): void {
  }
}


