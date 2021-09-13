import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../general/notas-g/nota.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
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
    protected notaService: NotaService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.bendecir();
}
notillas() {
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
bendecir() {
  this.notaService.bendecir(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.notillas();
    } else {
      this.router.navigate(['user/profile']);
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    }
  });
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
