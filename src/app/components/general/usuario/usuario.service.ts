import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://baker-io-pem.appspot.com/usuario.php', { withCredentials: true});
  }
  notis() {
    return this.http.get('http://baker-io-pem.appspot.com/notificaciones.php', { withCredentials: true});
  }
}

