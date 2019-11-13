import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }
   recuperarTodos() {
    return this.http.get('http://localhost/recuperartodos2.php');
  }

  alta(articulo) {
    return this.http.post('http://localhost/alta2.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://localhost/baja2.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://localhost/seleccionar2.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://localhost/modificacion2.php', JSON.stringify(articulo));
  }
  recuperarTodos2() {
    return this.http.get('http://localhost/recuperartodos2.php');
  }
}