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

  direccion: string = null;
  public origin: string;
  public destination: string = null;

  location = {};

      ngOnInit() {
      }
      getDirection() {
         this.destination = this.direccion + ',Guadalajara';

        }
    }


