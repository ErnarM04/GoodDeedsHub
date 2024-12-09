import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../models';
import {AppComponent} from '../app.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected firstName: string | undefined;
  protected lastName: string | undefined;
  protected email: string | undefined;
  protected password: string | undefined;
  protected date = new Date();
  protected gender: boolean = false;

  protected signup(){
    if(this.firstName && this.lastName && this.email && this.password){
      var user: User = {name: this.firstName, surname: this.lastName, email: this.email, password: this.password, gender: this.gender, phone: ''};

    }
  }
}
