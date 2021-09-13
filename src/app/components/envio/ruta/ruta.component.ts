import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { PreparadosService } from '../../admin/plantillas/preparados/preparados.service';
import { DiresService } from './dires.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  public headers = new HttpHeaders();
  direccion: string = null;
  public origin: string;
  public destination: string = null;
  activ = null;
  art = {
    id: null,
    dir: null
    };
  location = {};

  constructor(
    protected plan: DiresService, private http: HttpClient, public Auth: AuthService) { }
      ngOnInit() {
        this.getdir();
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(position => {
             this.location = position.coords;
             console.log(position.coords);
             this.origin =  (position.coords.latitude + ',' + position.coords.longitude);
           });
        }
      }
      getdir() {
        this.plan.dir()
        .subscribe(result => this.activ = result);
      }
      getDirection() {
        this.destination = this.direccion + ',Guadalajara';
       }
       terminar() {
         this.art.dir = this.direccion;
         this.plan.terminar(this.art).subscribe(datos => {
          // tslint:disable-next-line:no-string-literal
          if (datos['resultado'] === 'OK') {
            this.getdir();
            // tslint:disable-next-line:no-string-literal
            alert(datos['mensaje']);
          }
        });
      }
    }


