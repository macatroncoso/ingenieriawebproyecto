import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  infoUsuario: Usuario= new Usuario();
  
  constructor() { }

  ngOnInit(): void {

  }

}
