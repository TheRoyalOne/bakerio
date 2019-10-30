import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost/usuario.php');
  }
}

