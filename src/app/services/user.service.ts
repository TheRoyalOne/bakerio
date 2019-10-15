import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  constructor(protected http: HttpClient) { }
  getUsers() {
    return this.http.get('http://localhost/usuarios.php');
  }
}
