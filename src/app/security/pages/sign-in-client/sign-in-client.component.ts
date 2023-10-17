import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-client',
  templateUrl: './sign-in-client.component.html',
  styleUrls: ['./sign-in-client.component.css']
})
export class SignInClientComponent {

  navigateToback() {
    window.history.back();
  }
}
