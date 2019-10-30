import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('https://thejuanandonly.000webhostapp.com/bakerio/PHPs/usuarios.php');
  }
}
