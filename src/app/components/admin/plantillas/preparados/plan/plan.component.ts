import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { PreparadosService } from '../preparados.service';
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
  actividad = null;
  orden = null;
  var = null;
  var2 = null;
  art = {
    id: null,
    planesillo: null,
    plann: null,
    actividad: null,
    orden: null
  };
  constructor(public dialogRef: MatDialogRef<PlanComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private tarea: PreparadosService) {

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
  seleccionarplanp(codigo) {
    this.art.planesillo = codigo;
    console.log(this.art.planesillo);
    this.var = this.art.planesillo;
    alert(['Ha seleccionado la actividad ' + codigo]);
    this.tarea.selection(codigo).subscribe(result => this.art = result[0]);
  }
  actualizarplanp() {
    console.log(this.var);
    this.art.planesillo = this.var;
    console.log(this.art.planesillo);
    this.tarea.updeit(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        this.recuperarTodos();
        alert(['Cambio Realizado']);
        this.dialogRef.close('Se generó el cambio');
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
        this.dialogRef.close('Se generó el plan correctamente');
      } else {
        this.recuperarTodos();
        alert(['Plan No Permitido debido a que excede las horas laborales del empleado']);
        this.dialogRef.close('Se generó el plan incorrectamente');
      }
    });
  }
  hayRegistros() {
    return true;
  }
}
