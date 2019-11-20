import { Component, OnInit } from '@angular/core';
import { FullprodService } from './fullprod.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ComentarioComponent } from './comentario/comentario.component';
import { CompraComponent } from './compra/compra.component';
import { ApartadoComponent } from './apartado/apartado.component';
import { CompracComponent } from './compra/comprac/comprac.component';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
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
    openDialog(): void {
      const dialogRef = this.dialog.open(ComentarioComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
    openPurchase(codigo, costo): void {
      console.log(codigo);
      console.log(costo);
      this.precio = costo;
      this.producto = codigo;
      const dialogRef = this.dialog.open(CompracComponent, {
        data: {
          precio: this.precio,
          producto: this.producto
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }
    openStock(codigo, costo): void {
      console.log(codigo);
      console.log(costo);
      this.prec = costo;
      this.producto = codigo;
      const dialogRef = this.dialog.open(ApartadoComponent, {
        data: {
          prec: this.prec,
          producto: this.producto
        }
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


