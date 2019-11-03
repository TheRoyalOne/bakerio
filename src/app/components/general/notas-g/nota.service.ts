import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class NotaService {
  public headers = new HttpHeaders();
  constructor(protected http: HttpClient) { }
  getNotas() {
    return this.http.get('http://localhost/notas.php', { withCredentials: true});
  }
}
