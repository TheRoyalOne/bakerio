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
    return this.http.get('http://localhost/recuperartodosplanprep.php');
  }
  recuperarTodoss() {
    return this.http.get('http://localhost/recuperartodosventa.php');
  }
  usuarios() {
   return this.http.get('http://localhost/employees.php');
 }
  recuperarTodosp(codigo: number) {
    return this.http.get(`http://localhost/recuperartodosplanprepp.php?codigo=${codigo}`);
  }
  tareas() {
    return this.http.get('http://localhost/actividades.php');
  }
  planes() {
    return this.http.get('http://localhost/planes.php');
  }
  ordenes() {
    return this.http.get('http://localhost/planes.php');
  }

  alta(articulo) {
    return this.http.post('http://localhost/altaplanprep.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://localhost/bajaplanprep.php?codigo=${codigo}`);
  }
  bajaventa(codigo: number) {
    return this.http.get(`http://localhost/bajaventa.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://localhost/seleccionarplanprep.php?codigo=${codigo}`);
  }
  seleccionars(codigo: number) {
    return this.http.get(`http://localhost/seleccionventa.php?codigo=${codigo}`);
  }
  cancelar(codigo: number) {
    return this.http.get(`http://localhost/cancelarplan.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://localhost/modificacionplanprep.php', JSON.stringify(articulo));
  }
  modificacions(articulo) {
    return this.http.post('http://localhost/modificacionventa.php', JSON.stringify(articulo));
  }
  task(articulo) {
    return this.http.post('http://localhost/altaplan.php', JSON.stringify(articulo));
  }
  deletion(codigo: number) {
    return this.http.get(`http://localhost/bajaplan.php?codigo=${codigo}`);
  }
  cancelacion(codigo: number) {
    return this.http.get(`http://localhost/cancelarplan.php?codigo=${codigo}`);
  }
  selection(codigo: number) {
    return this.http.get(`http://localhost/seleccionarplan.php?codigo=${codigo}`);
  }
  validacionp(codigo: number) {
    return this.http.get(`http://localhost/asignacion.php?codigo=${codigo}`);
  }
  updeit(articulo) {
    return this.http.post('http://localhost/modificacionplan.php', JSON.stringify(articulo));
  }
}
