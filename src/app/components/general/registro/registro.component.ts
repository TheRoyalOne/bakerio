import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RegisterService } from './register.service';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  id: number;
  user: string;
        apex: string;
        correo: string;
        nacimiento: string;
        domicilio: string;
        level: number;
        horario: number;
        password: string;
        foto: string;
        telefono: number;
        celular: number;
        empresa: string;
  art = {
          id: null,
          user: null,
          apex: null,
          correo: null,
          nacimiento: null,
          domicilio: null,
          level: null,
          horario: null,
          password: null,
          foto: null,
          telefono: null,
          celular: null,
          empresa: null
  };

  constructor(private router: Router, private userService: RegisterService, protected http: HttpClient,
              private articulosServicio: RegisterService, public Auth: AuthService) { }

  ngOnInit() {
    this.recuperarTodos();
}
recuperarTodos() {
  this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
}

alta() {
  this.articulosServicio.alta(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    } else {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}

baja(codigo) {
  this.articulosServicio.baja(codigo).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}

modificacion() {
  this.articulosServicio.modificacion(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}

seleccionar(codigo) {
  console.log(codigo);
  this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
}

hayRegistros() {
  return true;
}

}
