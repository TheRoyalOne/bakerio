import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) {}
  historial() {
    return this.http.get('http://localhost/historialp.php', { withCredentials: true});
  }
  historialfull() {
    return this.http.get('http://localhost/historialfull.php', { withCredentials: true});
  }
}
