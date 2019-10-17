import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
  constructor(protected http: HttpClient) { }
  getProds() {
    return this.http.get('http://localhost/imagen.php');
  }
}
