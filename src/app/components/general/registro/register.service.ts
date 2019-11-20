import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class RegisterService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }
   recuperarTodos() {
    return this.http.get('http://baker-io-pem.appspot.com/recuperartodosm.php');
  }

  alta(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/altam.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/bajam.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/seleccionarm.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/modificacionm.php', JSON.stringify(articulo));
  }
}
