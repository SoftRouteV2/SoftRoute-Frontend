import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app-routing.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  navigateToSignUp() {
    this.router.navigate([routes.signUp]);
  }

  navigateToSignInAdministrator() {
    this.router.navigate([routes.signInAdministrator]);
  }

  navigateToSignInClient() {
    this.router.navigate([routes.signInClient]);

  }
}
