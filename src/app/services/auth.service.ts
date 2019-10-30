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
  public loggedInStatus = false;

  constructor(private http: HttpClient) {
  this.headers.set('Content-Type', 'application/json; charset=utf-8');
  this.headers.set('Content-Type', 'Cookie');
  this.headers.set('Allow-Credentials', 'true');
  this.headers.set('Content-Type', 'Authorization');
   }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

 get isLoggedIn() {
   return this.loggedInStatus;
  }
  getUserDetails(username, password) {
    return this.http.post<myData>('http://localhost/login.php', {
      username,
      password
    }, {headers: this.headers, withCredentials: true});
  }
}
