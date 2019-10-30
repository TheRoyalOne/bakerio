import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AiudaService {

  constructor(protected http: HttpClient) { }
  getHelp() {
    return this.http.get('http://localhost/notas.php');
  }
}
