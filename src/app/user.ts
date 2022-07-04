//esta clase es para guardar la información que se ingresa en el login antes de hacer el post

export class User{
  correo: string;
  password: string;
  esadmin: boolean;


      constructor(nuevoCorreo:string , nuevaPassword : string){
        this.correo=nuevoCorreo;
        this.password=nuevaPassword;
        this.esadmin = false;
        //this.sesion=true;
      }

   /* crearUser(nuevoCorreo:string , nuevaPassword : string){
      this.correo=nuevoCorreo;
      this.password=nuevaPassword;
    }*/

}
