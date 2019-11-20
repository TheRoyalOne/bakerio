import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://baker-io-pem.appspot.com/usuarios.php');
  }
  getUsersf() {
    return this.http.get('http://baker-io-pem.appspot.com/recetas.php');
  }
}
