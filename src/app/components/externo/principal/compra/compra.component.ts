import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { FullprodService } from '../fullprod.service';
import { PrincipalComponent } from '../principal.component';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../../../../services/auth.service';
// tslint:disable-next-line:class-name
export interface data {
  info: string;
}
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  prod: string;
  fecha: string;
  costo: number;
  obj: number;
  total: number;
  dia: string;
  semana: string;
  can: number;
  dir: string;
  art = {
    desc: null,
    dir: null,
    prod: null,
    fecha: null,
    obj: null,
    costo: null,
    can: null
  };
  constructor(public dialogRef: MatDialogRef<CompraComponent>, public Auth: AuthService,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private compra: FullprodService,
              private datePipe: DatePipe) {
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
  purchase(dato, cant, pan) {
    if (this.art.desc === 0) {
      this.total = (cant * dato);
    } else {
      this.total = (cant * dato) - (cant * dato) * (this.art.desc / 100);
    }
    console.log(this.total);
    this.art.costo = this.total;
    this.art.obj = pan;
    this.art.can = cant;
    this.compra.compra(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.dialogRef.close('Se generó la compra');
      }
    });
  }
}
