import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../general/notas-g/nota.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RespuestaComponent } from './respuesta/respuesta.component';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas: any[] = [];
  contenido: string;
  nota: number;
  art = {
    contenido: null,
    nota: null
  };
  constructor(
    protected notaService: NotaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.notaService.getNotasfull()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.notas = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
}
obtenerCosa(codigo) {
  console.log(codigo);
  this.nota = codigo;
  const dialogRef = this.dialog.open(RespuestaComponent, {
    data: {
      contenido: this.contenido,
      nota: this.nota
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });
}

}
