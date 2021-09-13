import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { PreparadosService } from './preparados.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlanComponent } from './plan/plan.component';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-preparados',
  templateUrl: './preparados.component.html',
  styleUrls: ['./preparados.component.css']
})
export class PreparadosComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  users = null;
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
          estado: null,
          user: null
  };

  constructor(private router: Router, protected http: HttpClient, public Auth: AuthService,
              private articulosServicio: PreparadosService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.bendecir();
    this.recuperarTodos();
    this.usuarios();
}

bendecir() {
  this.articulosServicio.bendecir(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    } else {
      this.router.navigate(['user/profile']);
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    }
  });
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

seleccionar(codigo) {
  console.log(codigo);
  this.esta(codigo);
  alert(['Usted ha seleccionado el plan ' + codigo]);
  this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  this.art.id = codigo;
  this.id = this.art.id;
}
administrar() {

}
cancelar(codigo) {
  this.articulosServicio.cancelacion(codigo).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.recuperarTodos();
    }
  });
  this.recuperarTodos();
}
esta(codigo) {
  this.articulosServicio.esta(codigo).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      // tslint:disable-next-line:no-string-literal
      this.Auth.plan = datos['mensaje'];
      this.recuperarTodos();
    }
  });
  this.recuperarTodos();
}
hayRegistros() {
  return true;
}

}
