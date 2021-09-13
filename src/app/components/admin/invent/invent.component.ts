import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisteraService } from '../registroa/registera.service';
import { AuthService } from '../../../services/auth.service';
import { DiresService } from '../../envio/ruta/dires.service';

@Component({
  selector: 'app-invent',
  templateUrl: './invent.component.html',
  styleUrls: ['./invent.component.css']
})
export class InventComponent implements OnInit {
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
  activ = null;
  art = {
          id: null,
          nombre: null,
          tipo: null,
          costo: null,
          existencias: null,
          unidad: null,
          extra: null,
          minimo: null,
          imagen: null,
          fecha: null,
          prod: null
  };

  constructor(private router: Router, protected http: HttpClient,
              private articulosServicio: RegisteraService, protected plan: DiresService) { }

  ngOnInit() {
    this.recuperarTodos();
}
recuperarTodos() {
  this.articulosServicio.recuperarTodosi().subscribe(result => this.articulos = result);
}
getdir() {
  this.plan.dir()
  .subscribe(result => this.activ = result);
}
alta() {
  this.articulosServicio.altai(this.art).subscribe(datos => {
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
  this.articulosServicio.bajai(codigo).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}

modificacion() {
  this.articulosServicio.modificacioni(this.art).subscribe(datos => {
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
  this.articulosServicio.seleccionari(codigo).subscribe(result => this.art = result[0]);
}

hayRegistros() {
  return true;
}

}
