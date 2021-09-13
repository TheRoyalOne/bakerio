import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistronService } from './registron.service';
// tslint:disable-next-line:class-name
export interface data {
  info: string;
}

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  contenido: string;
  art = {
    contenido: null
  };
  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
              // tslint:disable-next-line:no-shadowed-variable
              @Inject(MAT_DIALOG_DATA)public data: any, private router: Router,
              private userService: RegistronService, protected http: HttpClient,
              private articulosServicio: RegistronService) {

    }

  ngOnInit() {
  }
  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
        this.dialogRef.close('It was saved');
      }
    });
  }
}
