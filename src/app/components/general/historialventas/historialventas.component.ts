import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlanComponent } from '../../admin/plantillas/preparados/plan/plan.component';
import { PreparadosService } from '../../admin/plantillas/preparados/preparados.service';
@Component({
  selector: 'app-historialventas',
  templateUrl: './historialventas.component.html',
  styleUrls: ['./historialventas.component.css']
})
export class HistorialventasComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  users = null;
  id: number;
  nombre: string;
  tipo: string;
  asignacion: string;
  estado: string;
  plans: number;
  aiuda: number;
  art = {
    ventilla: null,
          id: null,
          estado: null,
          fechacreacion: null,
          fechaentrega: null,
          total: null,
          user: null,
          direccion: null
  };

  constructor(private router: Router, protected http: HttpClient,
              private articulosServicio: PreparadosService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.recuperarTodoss();
}
tarea(codigo) {
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
recuperarTodoss() {
  this.articulosServicio.recuperarTodoss().subscribe(result => this.articulos = result);
}
usuarios() {
  this.articulosServicio.usuarios().subscribe(result => this.users = result);
}

alta() {
  this.articulosServicio.alta(this.art).subscribe(datos => {
    console.log(this.id);
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
bajas(codigo) {
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
  this.art.id = this.id;
  this.articulosServicio.modificacion(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
}
modificacions() {
  this.art.ventilla = this.aiuda;
  console.log(this.aiuda);
  this.articulosServicio.modificacions(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodoss();
    }
  });
}

seleccionar(codigo) {
  console.log(codigo);
  alert(['Usted ha seleccionado el plan ' + codigo]);
  this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  this.art.id = codigo;
  this.id = this.art.id;
}
seleccionars(codigo) {
  console.log(codigo);
  this.art.ventilla=codigo;
  this.aiuda=this.art.ventilla;
  console.log(this.aiuda);
  alert(['Usted ha seleccionado la venta ' + codigo]);
  this.articulosServicio.seleccionars(codigo).subscribe(result => this.art = result[0]);
  this.art.id = codigo;
  this.id = this.art.id;
  console.log(this.art.id);
}
administrar() {

}
cancelar(codigo) {

}
hayRegistros() {
  return true;
}

}
