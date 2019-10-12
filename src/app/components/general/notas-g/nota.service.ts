import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NotaService {
  constructor(protected http: HttpClient) { }
  getNotas() {
    return this.http.get('http://localhost/notas.php');
  }
}
