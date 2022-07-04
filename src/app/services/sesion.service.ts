import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, pipe } from 'rxjs';
import { Usuario } from '../usuario';
import { User } from '../user';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private register: string="http://127.0.0.1:8000/api/auth/register/"
  private login:string="http://127.0.0.1:8000/api/auth/login/"

  constructor(private http:HttpClient) { }

  httpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  public registerUser(user: Usuario):Observable<any>{
    return this.http.post<Usuario>(this.register,user/*,this.httpUploadOptions*/)
      .pipe(map((data: any) =>{
        return data.user;
      }));
  }

  public loginUser(user: User){
    return this.http.post<User>(this.login,JSON.stringify(user)/*,this.httpUploadOptions*/);
  }




}
