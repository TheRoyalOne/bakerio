import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { FullprodService } from '../fullprod.service';
import { PrincipalComponent } from '../principal.component';
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
  total: number;
  art = {
    prod: null,
    fecha: null,
    costo: null
  };
  constructor(public dialogRef: MatDialogRef<CompraComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private compra: FullprodService) {
    }

  ngOnInit() {
  }
  purchase(dato, cant) {
    this.total = cant * dato;
    this.art.costo = this.total;
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
