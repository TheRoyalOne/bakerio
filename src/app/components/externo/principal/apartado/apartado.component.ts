import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { FullprodService } from '../fullprod.service';
// tslint:disable-next-line:class-name
export interface data {
  contenido: string;
  fecha: string;
}
@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styleUrls: ['./apartado.component.css']
})
export class ApartadoComponent implements OnInit {
  prod: string;
  fecha: string;
  costo: number;
  total: number;
  art = {
    prod: null,
    fecha: null,
    costo: null
  };
  constructor(public dialogRef: MatDialogRef<ApartadoComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private comentario: FullprodService) {

    }

  ngOnInit() {
  }
  alta(dato, cant) {
    console.log(cant);
    console.log(dato);
    this.total = cant * dato;
    console.log(this.total);
    this.art.costo = this.total;
    this.comentario.apartado(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.dialogRef.close('Se apartó');
      }
    });
  }
}
