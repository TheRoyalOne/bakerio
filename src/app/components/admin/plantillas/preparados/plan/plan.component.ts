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
  activ= null;
  plans= null;
  ord= null;
  planesillo: number;
  actividad:number;
  orden: number;
  var: number;
  plann: number;
  art = {
    planesillo: null,
    plann: null,
    actividad:null,
    orden: null
  };
  constructor(public dialogRef: MatDialogRef<PlanComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private tarea: PreparadosService) {

    }

  ngOnInit() {
    this.var=this.data.plan;
    this.art.planesillo=this.var;
    this.recuperarTodos();
    this.actividades();
    this.planes();
    }
  recuperarTodos() {
    this.tarea.recuperarTodosp(this.var).subscribe(result => this.articulos = result);
  }
  actividades(){
    this.tarea.tareas().subscribe(result => this.activ = result);
  }
  planes(){
    this.tarea.planes().subscribe(result => this.plans = result);
  }
  ordenes(){
    this.tarea.ordenes().subscribe(result => this.ord = result);
  }
  
  altaplanp() {

    this.tarea.task(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      }
    });
  }
  bajaplanp(codigo) {
    this.tarea.deletion(codigo).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  seleccionarplanp(codigo) {
    console.log(codigo);
    alert(['Ha seleccionado la actividad '+codigo]);
    this.tarea.selection(codigo).subscribe(result => this.art = result[0]);
  }
  actualizarplanp() {
    this.art.planesillo=this.var;
    console.log(this.art.planesillo);
    this.tarea.updeit(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  hayRegistros() {
    return true;
  }
}
