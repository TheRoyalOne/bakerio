import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost/mono.php', { withCredentials: true});
  }
  atraso(codigo: number) {
    return this.http.get(`http://lvocalhost/canc.php?codigo=${codigo}`);
  }
  terminar(articulo) {
    return this.http.post('http://localhost/terminar.php', JSON.stringify(articulo), { withCredentials: true} );
  }
}
