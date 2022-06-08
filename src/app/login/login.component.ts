import { Component, OnInit } from '@angular/core';
import { SituacionActualComponent } from '../situacion-actual/situacion-actual.component';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string="";
  password: string="";

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
  ngOnInit(): void {

  }

}
