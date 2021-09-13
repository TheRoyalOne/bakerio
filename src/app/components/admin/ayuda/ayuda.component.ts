import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisteraService } from '../registroa/registera.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  id: number;
  nombre: string;
  tipo: string;
  costo: number;
  existencias: number;
  unidad: string;
  extra: string;
  minimo: number;
  imagen: string;
  fecha: string;
  art = {
          id: null,
          cont: null,
          nombre: null,
          tipo: null,
          costo: null,
          existencias: null,
          unidad: null,
          extra: null,
          minimo: null,
          imagen: null,
          fecha: null
  };

  constructor(private router: Router, protected http: HttpClient,
              private articulosServicio: RegisteraService) { }

  ngOnInit() {
    this.recuperarTodos();
}
recuperarTodos() {
  this.articulosServicio.recuperarTodosa().subscribe(result => this.articulos = result);
}

alta() {
  this.articulosServicio.altaa(this.art).subscribe(datos => {
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
  this.articulosServicio.bajaa(codigo).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}

modificacion() {
  this.articulosServicio.modificaciona(this.art).subscribe(datos => {
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
  this.articulosServicio.seleccionara(codigo).subscribe(result => this.art = result[0]);
}

hayRegistros() {
  return true;
}

}
