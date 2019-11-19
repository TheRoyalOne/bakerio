import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost/usuarios.php');
  }
  getUsersf() {
    return this.http.get('http://localhost/recetas.php');
  }
}
