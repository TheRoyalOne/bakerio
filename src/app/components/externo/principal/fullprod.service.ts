import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FullprodService {
  constructor(protected http: HttpClient) { }
  getProd() {
    return this.http.get('http://localhost/productos.php');
  }
}
