import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FullprodService } from '../../../externo/principal/fullprod.service';


// tslint:disable-next-line:class-name
export interface data {
  contenido: string;
  fecha: string;
}
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  prod: string;
  fecha: string;
  costo: number;
  total: number;
  dia: string;
  semana: string;
  can: number;
  var: string;
  public origin: string;
  public direccion: string;
  public destination: string = null;
  art = {
    prod: null,
    fecha: null,
    obj: null,
    direccion: null,
    costo: null,
    can: null
  };
  constructor(public dialogRef: MatDialogRef<RutasComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private comentario: FullprodService,
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
    location = {};
    setPosition(position) {
       this.location = position.coords;
       console.log(position.coords);
       }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
         this.location = position.coords;
         console.log(position.coords);
       });
    }
  }
  getDirection(dir) {

    this.origin =  'Calle Juan Zubaran 2311';
    this.destination = this.direccion + ',Guadalajara';
    }
}
