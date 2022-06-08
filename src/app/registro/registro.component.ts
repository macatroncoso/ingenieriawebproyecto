import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  nombre:string="";
  correo: string="";
  password: string="";
  confirmPassword: string="";

  constructor() {}

  register() {
    if(this.password!=this.confirmPassword){
      window.alert("Las contraseñas no coinciden");
    }else{
      var nuevo: Usuario=new Usuario();
      nuevo.crearUsuario(this.nombre,this.correo,this.password,false,0,0);
      console.log(nuevo);
      
    }
  }
  ngOnInit(): void {
  }

}
