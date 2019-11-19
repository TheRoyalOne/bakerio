import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../general/historial/historial.service';

@Component({
  selector: 'app-historial-completo',
  templateUrl: './historial-completo.component.html',
  styleUrls: ['./historial-completo.component.css']
})
export class HistorialCompletoComponent implements OnInit {
  usuarios: any[] = [];
  constructor(private historial: HistorialService) { }

  ngOnInit() {
    this.historial.historialfull()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.usuarios = data['results'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
