import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// tslint:disable-next-line:class-name
interface myData {
  success: boolean;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Content-Type', 'Cookie');
    this.headers.set('Allow-Credentials', 'true');
    this.headers.set('Content-Type', 'Authorization');
  }
  getSomeData() {
    return this.http.get<myData>('http://localhost/database.php', {headers: this.headers, withCredentials: true}) ;
  }
}
