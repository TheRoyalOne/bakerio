import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { PreparadosService } from '../preparados.service';
import { AuthService } from '../../../../../services/auth.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  activ = null;
  plans = null;
  ord = null;
  planesillo = null;
  ordens = null;
  actividad = null;
  orden = null;
  var = null;
  var2 = null;
  varf = null;
  art = {
    id: null,
    planesillo: null,
    ordens: null,
    plann: null,
    actividad: null,
    orden: null,
    nom: null
  };
  constructor(public dialogRef: MatDialogRef<PlanComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private tarea: PreparadosService, public Auth: AuthService) {

    }

  ngOnInit() {
    this.var2 = this.data.plan;
    this.art.plann = this.var2;
    this.recuperarTodos();
    this.actividades();
    this.planes();
    }
  recuperarTodos() {
    this.tarea.recuperarTodosp(this.var2).subscribe(result => this.articulos = result);
  }
  actividades() {
    this.tarea.tareas().subscribe(result => this.activ = result);
  }
  planes() {
    this.tarea.planes().subscribe(result => this.plans = result);
  }
  ordenes() {
    this.tarea.ordenes().subscribe(result => this.ord = result);
  }
  altaplanp() {

    this.tarea.task(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.validarp();
        this.recuperarTodos();
      }
    });
    this.recuperarTodos();
  }
  bajaplanp(codigo) {
    this.tarea.deletion(codigo).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.validarp();
        this.recuperarTodos();
      }
    });
    this.recuperarTodos();
  }
  prolongar(codigo) {
    console.log(codigo);
    this.tarea.accion(codigo).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    this.recuperarTodos();
  }
  seleccionarplanp(codigo, act, ord) {
    this.art.planesillo = codigo;
    this.art.ordens = ord;
    this.art.nom = act;
    console.log(this.art.planesillo);
    console.log(this.art.ordens);
    this.var = this.art.planesillo;
    this.varf = this.art.ordens;
    alert(['Ha seleccionado la actividad ' + codigo]);
    this.tarea.selection(codigo).subscribe(result => this.art = result[0]);
    this.actividades();
  }
  actualizarplanp() {
    console.log(this.var);
    this.art.planesillo = this.var;
    this.art.ordens = this.varf;
    console.log(this.art.planesillo);
    console.log(this.art.ordens);
    this.tarea.updeit(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        this.recuperarTodos();
        alert(['Cambio Realizado']);
        this.validarp();
      }
    });
    this.recuperarTodos();
  }
  validarp() {
    console.log(this.var2);
    this.tarea.validacionp(this.var2).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'YES PAPA') {
        this.recuperarTodos();
        alert(['Plan Permitido']);
      } else {
        this.recuperarTodos();
        alert(['Plan No Permitido debido a que excede las horas laborales del empleado, verifique el plan']);
      }
    });
  }
  hayRegistros() {
    return true;
  }
}
