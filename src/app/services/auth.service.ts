import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

// tslint:disable-next-line:class-name
interface myData {
  success: boolean;
  message: string;
}

@Injectable()
export class AuthService {
  public headers = new HttpHeaders();
  private loggedInStatus = false;
  public vato;
  public plan;
  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  bendecir(articulo) {
    return this.http.post('http://localhost/certificacionkk.php', JSON.stringify(articulo), { withCredentials: true});
  }

 get isLoggedIn() {
  return this.loggedInStatus;
  }
  entrada() {
    return this.http.get('http://localhost/entrada.php', {headers: this.headers, withCredentials: true});
  }
  salida() {
      return this.http.get('http://localhost/salida.php', {headers: this.headers, withCredentials: true});
  }
  getUserDetails(username, password) {
    return this.http.post<myData>('http://localhost/login.php', {
      username,
      password
    }, {headers: this.headers, withCredentials: true});
  }
  asignacion() {
    return this.http.get('http://localhost/asignacionPlan.php', {withCredentials: true});
  }
  cuenta() {
    return this.http.get('http://localhost/cuenta.php', {withCredentials: true});
  }
  check() {
    return this.http.get('http://localhost/congelados.php', {withCredentials: true});
  }
}
