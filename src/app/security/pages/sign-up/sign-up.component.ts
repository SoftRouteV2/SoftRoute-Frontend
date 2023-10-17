import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router) { }
  navigateToLogin() {
    this.router.navigate([routes.login]);
  }
}
