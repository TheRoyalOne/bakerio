import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisteraService } from '../../admin/registroa/registera.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ComentarioComponent } from '../../externo/principal/comentario/comentario.component';
import { AuthService } from '../../../services/auth.service';
import { DiresService } from '../../envio/ruta/dires.service';

@Component({
  selector: 'app-invuser',
  templateUrl: './invuser.component.html',
  styleUrls: ['./invuser.component.css']
})
export class InvuserComponent implements OnInit {
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

  constructor(private router: Router, protected http: HttpClient, protected plan: DiresService,
              private articulosServicio: RegisteraService, public dialog: MatDialog, public Auth: AuthService) { }

  ngOnInit() {
    this.recuperarTodos();
    this.getdir();
}
openDialog(): void {
  const dialogRef = this.dialog.open(ComentarioComponent, {
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });
}getdir() {
  this.articulosServicio.recuperarTodosi()
  .subscribe(result => this.activ = result);
}
recuperarTodos() {
  this.articulosServicio.recuperarTodosi().subscribe(result => this.articulos = result);
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
      this.openDialog();
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
      this.openDialog();
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
