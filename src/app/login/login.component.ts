import { Component, OnInit } from '@angular/core';
import { startSession } from 'mongoose';
import { SituacionActualComponent } from '../situacion-actual/situacion-actual.component';
import { SesionService } from '../services/sesion.service';
import { User } from '../user';

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
     let nuevo: User;
     nuevo = new User(this.email,this.password);

     console.log(nuevo);
  }
  ngOnInit(): void {

  }

}
