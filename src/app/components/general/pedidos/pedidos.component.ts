import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FullprodService } from '../../externo/principal/fullprod.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
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


