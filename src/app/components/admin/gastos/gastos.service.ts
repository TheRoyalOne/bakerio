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
    return this.http.get('http://baker-io-pem.appspot.com/recuperartodosg.php');
  }

  alta(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/altag.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/bajag.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/seleccionarg.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/modificaciong.php', JSON.stringify(articulo));
  }
}
