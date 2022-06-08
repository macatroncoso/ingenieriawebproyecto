export class Usuario {
    nombre: string;
    correo: string;
    password: string;
    sesion: boolean;
    nivel: number;
    puntos: number;

    constructor(){
       this.nombre="";
       this.correo="";
       this.password="";
       this.sesion=false;
       this.nivel=0;
       this.puntos=0;
    }

    crearUsuario(nuevoNombre:string, nuevoCorreo:string , nuevaPassword : string, nuevaSesion: boolean, nivel: number, puntos:number){
        this.nombre=nuevoNombre;
        this.correo=nuevoCorreo;
        this.password=nuevaPassword;
        this.sesion=nuevaSesion;
        this.nivel=nivel;
        this.puntos=puntos;
    }

}

var arreglo: Usuario[];



