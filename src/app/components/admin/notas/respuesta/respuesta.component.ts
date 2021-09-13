import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { NotasComponent } from '../notas.component';
import { NotaService } from '../../../general/notas-g/nota.service';
// tslint:disable-next-line:class-name
export interface data {
  info: string;
}
@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
conte: string;
note: number;
art = {
  conte: null,
  note: null
};
  constructor(public dialogRef: MatDialogRef<RespuestaComponent>,
    // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              protected http: HttpClient, private respuesta: NotaService) { }

  ngOnInit() {
  }
  responder(notilla, cosilla) {
    console.log(notilla);
    console.log(cosilla);
    this.art.note = notilla;
    this.respuesta.respuesta(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.dialogRef.close('Se generó la respuesta');
      }
    });
  }
}
