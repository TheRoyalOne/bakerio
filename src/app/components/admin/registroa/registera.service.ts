import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteraService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }
   recuperarTodos() {
    return this.http.get('http://localhost/recuperartodos.php');
  }
  recuperarTodosac() {
   return this.http.get('http://localhost/act.php');
 }
  recuperarTodosi() {
   return this.http.get('http://localhost/recuperarinv.php');
 }
 recuperarTodosa() {
  return this.http.get('http://localhost/recuperary.php');
}

  alta(articulo) {
    return this.http.post('http://localhost/alta.php', JSON.stringify(articulo));
  }
  altaac(articulo) {
    return this.http.post('http://localhost/altaac.php', JSON.stringify(articulo));
  }
  altai(articulo) {
    return this.http.post('http://localhost/altainv.php', JSON.stringify(articulo));
  }
  altaa(articulo) {
    return this.http.post('http://localhost/altay.php', JSON.stringify(articulo));
  }

  baja(codigo: number) {
    return this.http.get(`http://localhost/baja.php?codigo=${codigo}`);
  }
  bajaac(codigo: number) {
    return this.http.get(`http://localhost/bajaac.php?codigo=${codigo}`);
  }
  seleccionar(codigo: number) {
    return this.http.get(`http://localhost/seleccionar.php?codigo=${codigo}`);
  }
  seleccionarac(codigo: number) {
    return this.http.get(`http://localhost/seleccionarac.php?codigo=${codigo}`);
  }
  bajai(codigo: number) {
    return this.http.get(`http://localhost/bajainv.php?codigo=${codigo}`);
  }
  bajaa(codigo: number) {
    return this.http.get(`http://localhost/bajay.php?codigo=${codigo}`);
  }
  seleccionari(codigo: number) {
    return this.http.get(`http://localhost/seleccionarinv.php?codigo=${codigo}`);
  }
  seleccionara(codigo: number) {
    return this.http.get(`http://localhost/seleccionary.php?codigo=${codigo}`);
  }
  modificacion(articulo) {
    return this.http.post('http://localhost/modificacion.php', JSON.stringify(articulo));
  }
  modificacioni(articulo) {
    return this.http.post('http://localhost/modificacioninv.php', JSON.stringify(articulo));
  }
  modificaciona(articulo) {
    return this.http.post('http://localhost/modificaciony.php', JSON.stringify(articulo));
  }
  modificacionac(articulo) {
    return this.http.post('http://localhost/modificacionac.php', JSON.stringify(articulo));
  }
  recuperarTodos2() {
    return this.http.get('http://localhost/recuperartodos.php');
  }
}
