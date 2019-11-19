import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FullprodService } from '../../externo/principal/fullprod.service';
import { CompraComponent } from '../../externo/principal/compra/compra.component';
import { ComentarioComponent } from '../../externo/principal/comentario/comentario.component';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  productos: any[] = [];
  precio: number;
  prec: number;
  producto: number;
  art = {
    prod: null,
    fecha: null,
    precio: null,
    prec: null
  };
  constructor(
    protected principe: FullprodService, public dialog: MatDialog) { }
    openPurchase(codigo, costo): void {
      console.log(codigo);
      console.log(costo);
      this.precio = costo;
      this.producto = codigo;
      const dialogRef = this.dialog.open(CompraComponent, {
        data: {
          precio: this.precio,
          producto: this.producto
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        this.openDialog();
      });
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(ComentarioComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
  ngOnInit() {
    this.principe.getProd()
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


