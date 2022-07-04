import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SesionService } from '../services/sesion.service';
import { Usuario } from '../usuario';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})


export class RegistroComponent implements OnInit {
  username:string="";
  nombre:string="";
  apellido:string="";
  correo: string="";
  password: string="";
  confirmPassword: string="";


  constructor(private sesionService: SesionService) {

  }


  register() {
    if(this.password!=this.confirmPassword){
      window.alert("Las contraseñas no coinciden");
    }else{
      let nuevo: Usuario=new Usuario(this.username,this.nombre,this.apellido,this.correo,this.password,this.confirmPassword);
      //console.log(nuevo);

      this.sesionService.registerUser(nuevo).subscribe(data => console.log(data)
      );
    }
  }

  ngOnInit(): void {

  }

}
