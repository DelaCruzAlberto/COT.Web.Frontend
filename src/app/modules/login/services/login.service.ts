import { Request } from 'src/app/api/request';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request: Request) { }

   postIniciarSesion(user: Usuario){
    const url: string = `/Login/InicioDeSesionDirecto`
    try {
      const result =  this.request.post(url, user);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
