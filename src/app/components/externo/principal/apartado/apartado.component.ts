import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { FullprodService } from '../fullprod.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';


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
  dia: string;
  semana: string;
  can: number;
  art = {
    prod: null,
    fecha: null,
    obj: null,
    costo: null,
    can: null
  };
  constructor(public dialogRef: MatDialogRef<ApartadoComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private comentario: FullprodService,
              private datePipe: DatePipe, public Auth: AuthService) {
                const tomorrow = new Date();
                const week = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                week.setDate(tomorrow.getDate() + 7);
                this.dia = this.datePipe.transform(tomorrow, 'yyyy-MM-dd');
                this.semana = this.datePipe.transform(week, 'yyyy-MM-dd');
                console.log(this.semana);
                console.log(this.dia);
    }

  ngOnInit() {
  }
  alta(dato, cant, pan) {
    this.total = (cant * dato);
    console.log(this.total);
    this.art.costo = this.total;
    this.art.obj = pan;
    this.art.can = cant;
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
