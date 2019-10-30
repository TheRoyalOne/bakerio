import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UserService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Content-Type', 'Cookie');
    this.headers.set('Allow-Credentials', 'true');
    this.headers.set('Content-Type', 'Authorization'); }
  getUsers() {
    return this.http.get('http://localhost/usuario.php'), {headers: this.headers, withCredentials: true};
  }
}
