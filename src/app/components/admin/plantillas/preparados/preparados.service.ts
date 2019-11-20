import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreparadosService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }
   recuperarTodos() {
    return this.http.get('http://baker-io-pem.appspot.com/recuperartodosplanprep.php');
  }
  recuperarTodoss() {
    return this.http.get('http://baker-io-pem.appspot.com/recuperartodosventa.php');
  }
  usuarios() {
   return this.http.get('http://baker-io-pem.appspot.com/employees.php');
 }
  recuperarTodosp(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/recuperartodosplanprepp.php?codigo=${codigo}`);
  }
  tareas() {
    return this.http.get('http://baker-io-pem.appspot.com/actividades.php');
  }
  planes() {
    return this.http.get('http://baker-io-pem.appspot.com/planes.php');
  }
  ordenes() {
    return this.http.get('http://baker-io-pem.appspot.com/planes.php');
  }

  alta(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/altaplanprep.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/bajaplanprep.php?codigo=${codigo}`);
  }
  bajaventa(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/bajaventa.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/seleccionarplanprep.php?codigo=${codigo}`);
  }
  seleccionars(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/seleccionventa.php?codigo=${codigo}`);
  }
  cancelar(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/cancelarplan.php?codigo=${codigo}`, { withCredentials: true});
  }
  modificacion(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/modificacionplanprep.php', JSON.stringify(articulo));
  }
  modificacions(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/modificacionventa.php', JSON.stringify(articulo));
  }
  task(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/altaplan.php', JSON.stringify(articulo));
  }
  deletion(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/bajaplan.php?codigo=${codigo}`);
  }
  cancelacion(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/cancelarplan.php?codigo=${codigo}`, { withCredentials: true});
  }
  selection(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/seleccionarplan.php?codigo=${codigo}`);
  }
  validacionp(codigo: number) {
    return this.http.get(`http://baker-io-pem.appspot.com/asignacion.php?codigo=${codigo}`);
  }
  updeit(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/modificacionplan.php', JSON.stringify(articulo));
  }
}
