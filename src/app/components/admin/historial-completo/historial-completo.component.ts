import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../general/historial/historial.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-historial-completo',
  templateUrl: './historial-completo.component.html',
  styleUrls: ['./historial-completo.component.css']
})
export class HistorialCompletoComponent implements OnInit {
  usuarios: any[] = [];
  constructor(private historial: HistorialService, private router: Router, public Auth: AuthService) { }

  ngOnInit() {
    this.bendecir();
    this.bendecir();
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
  bendecir() {
    this.historial.bendecir(this.usuarios).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      } else {
        this.router.navigate(['user/profile']);
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      }
    });
  }

}
