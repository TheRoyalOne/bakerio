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
  coment(articulo) {
    return this.http.post('http://localhost/coment.php', JSON.stringify(articulo), { withCredentials: true});
  }
  compra(articulo) {
    return this.http.post('http://localhost/compra.php', JSON.stringify(articulo), { withCredentials: true});
  }
  apartado(articulo) {
    return this.http.post('http://localhost/apartado.php', JSON.stringify(articulo), { withCredentials: true});
  }
}
