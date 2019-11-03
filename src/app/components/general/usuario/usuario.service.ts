import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost/usuario.php', { withCredentials: true});
  }
}

