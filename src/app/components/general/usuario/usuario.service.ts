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
  getHelp() {
    return this.http.get('http://localhost/aiudapro.php', { withCredentials: true});
  }
  notis() {
    return this.http.get('http://localhost/notificaciones.php', { withCredentials: true});
  }
  bendecir(articulo) {
    return this.http.post('http://localhost/certificacion.php', JSON.stringify(articulo), { withCredentials: true});
  }
  retardos(articulo) {
    return this.http.post('http://localhost/retardo.php', JSON.stringify(articulo), { withCredentials: true});
  }
}

