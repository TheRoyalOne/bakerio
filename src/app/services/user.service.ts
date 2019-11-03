import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UserService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost/usuario.php'), { withCredentials: false};
  }
}
