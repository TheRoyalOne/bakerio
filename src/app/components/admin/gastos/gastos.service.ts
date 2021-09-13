import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }
   recuperarTodos() {
    return this.http.get('http://localhost/recuperartodosg.php');
  }
  bendecir(articulo) {
    return this.http.post('http://localhost/certificacion.php', JSON.stringify(articulo), { withCredentials: true});
  }

  alta(articulo) {
    return this.http.post('http://localhost/altag.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://localhost/bajag.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://localhost/seleccionarg.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://localhost/modificaciong.php', JSON.stringify(articulo));
  }
}
