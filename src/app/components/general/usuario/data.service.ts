import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:class-name
interface myData {
  success: boolean;
  message: string;
}
// tslint:disable-next-line:class-name
interface isLoggedIn {
  status: boolean;
}
// tslint:disable-next-line:class-name
interface logoutStatus {
  success: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
  }
  getSomeData() {
    return this.http.get<myData>('http://baker-io-pem.appspot.com/database.php', { withCredentials: true}) ;
  }
isLoggedIn(): Observable<isLoggedIn> {
  return this.http.get<isLoggedIn>('http://baker-io-pem.appspot.com/isloggedin.php', { withCredentials: true});
  }
logout() {
    return this.http.get<logoutStatus>('http://baker-io-pem.appspot.com/logout.php', { withCredentials: true});
  }
}
