import { Component, OnInit } from '@angular/core';
import { HistorialService } from './historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private historial: HistorialService) { }

  ngOnInit() {
    this.historial.historial()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.usuarios = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
