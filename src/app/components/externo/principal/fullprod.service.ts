import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FullprodService {
  constructor(protected http: HttpClient) { }
  getProd() {
    return this.http.get('http://baker-io-pem.appspot.com/productos.php');
  }
  getPed() {
    return this.http.get('http://baker-io-pem.appspot.com/envios.php');
  }
  coment(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/coment.php', JSON.stringify(articulo), { withCredentials: true});
  }
  compra(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/compra.php', JSON.stringify(articulo), { withCredentials: true});
  }
  apartado(articulo) {
    return this.http.post('http://baker-io-pem.appspot.com/apartado.php', JSON.stringify(articulo), { withCredentials: true});
  }
}
