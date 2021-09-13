import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class NotaService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) { }
  getNotas() {
    return this.http.get('http://localhost/notas.php', { withCredentials: true});
  }
  bendecir(articulo) {
    return this.http.post('http://localhost/certificacion.php', JSON.stringify(articulo), { withCredentials: true});
  }
  getNotasfull() {
    return this.http.get('http://localhost/notasfull.php', { withCredentials: true});
  }
  respuesta(nota) {
    return this.http.post('http://localhost/respuesta.php', JSON.stringify(nota), { withCredentials: true});
  }
}
