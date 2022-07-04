
export class Usuario {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password2:string;

    constructor(nuevoNombreUsuario:string,nuevoNombre:string,nuevoApellido:string, nuevoCorreo:string , nuevaPassword : string, nuevaPassword2 : string){
      this.username=nuevoNombreUsuario;
        this.first_name=nuevoNombre;
        this.last_name=nuevoApellido;
        this.email=nuevoCorreo;
        this.password=nuevaPassword;
        this.password2= nuevaPassword2;
    }

    /*crearUsuario(nuevoNombreUsuario:string,nuevoNombre:string,nuevoApellido:string, nuevoCorreo:string , nuevaPassword : string, nuevaPassword2 : string){
        this.nombreUsuario=nuevoNombreUsuario;
        this.nombre=nuevoNombre;
        this.apellido=nuevoApellido;
        this.correo=nuevoCorreo;
        this.password=nuevaPassword;
        this.password2= nuevaPassword2;

    }*/

}
