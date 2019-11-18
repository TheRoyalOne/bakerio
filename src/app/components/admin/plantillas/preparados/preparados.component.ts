import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { PreparadosService } from './preparados.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlanComponent } from './plan/plan.component';
@Component({
  selector: 'app-preparados',
  templateUrl: './preparados.component.html',
  styleUrls: ['./preparados.component.css']
})
export class PreparadosComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  id: number;
  nombre: string;
  tipo: string;
  asignacion: string;
  estado: string;
  plans: number;
  art = {
          id: null,
          nombre: null,
          tipo: null,
          asignacion: null,
          estado: null
  };

  constructor(private router: Router, protected http: HttpClient,
              private articulosServicio: PreparadosService,
               public dialog: MatDialog) { }

  ngOnInit() {
    this.recuperarTodos();
}
tarea(codigo){
  console.log(codigo);
  this.id = codigo;
  const dialogRef = this.dialog.open(PlanComponent, {
    data: {
      plan: this.id
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('El ingreso de actividades murió');
    console.log(result);
  });
}
recuperarTodos() {
  this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
}

alta() {
  this.articulosServicio.alta(this.art).subscribe(datos => {
    console.log(this.id);
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }else{
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
  this.art.id=this.id;
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
  alert(['Usted ha seleccionado el plan '+codigo]);
  this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  this.art.id=codigo;
  this.id=this.art.id;
}
administrar(){

}
cancelar(codigo){

}
hayRegistros() {
  return true;
}

}
