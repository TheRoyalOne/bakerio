import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FullprodService } from '../../externo/principal/fullprod.service';
import { RutasComponent } from './rutas/rutas.component';
@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  productos: any[] = [];
  precio: number;
  prec: number;
  producto: number;
  dire: string;
  envio: number;
  art = {
    prod: null,
    fecha: null,
    precio: null,
    prec: null
  };
  constructor(
    protected principe: FullprodService, public dialog: MatDialog) { }
    openDialog(env,dir): void {
      this.dire=dir;
      this.envio=env;
      const dialogRef = this.dialog.open(RutasComponent, {
        data: {
          dire: this.dire,
          envio: this.envio
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
  ngOnInit() {
    this.principe.getPed()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.productos = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}


