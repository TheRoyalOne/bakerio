import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://baker-io-pem.appspot.com/mono.php', { withCredentials: true});
  }
  terminar(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/terminar.php', JSON.stringify(articulo), { withCredentials: true} );
  }
}
