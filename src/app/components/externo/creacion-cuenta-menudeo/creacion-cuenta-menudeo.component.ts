import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Registrom2Service } from './registrom2.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-creacion-cuenta-menudeo',
  templateUrl: './creacion-cuenta-menudeo.component.html',
  styleUrls: ['./creacion-cuenta-menudeo.component.css']
})
export class CreacionCuentaMenudeoComponent implements OnInit {
  public headers = new HttpHeaders();
  articulos = null;
  id: number;
  user: string;
        apex: string;
        correo: string;
        nacimiento: string;
        domicilio: string;
        level: number;
        horario: number;
        password: string;
        foto: string;
        telefono: number;
        celular: number;
        empresa: string;
  art = {
          id: null,
          user: null,
          apex: null,
          correo: null,
          nacimiento: null,
          domicilio: null,
          level: null,
          horario: null,
          password: null,
          foto: null,
          telefono: null,
          celular: null,
          empresa: null
  };

  constructor(private router: Router, private userService: Registrom2Service, protected http: HttpClient,
              private articulosServicio: Registrom2Service, public Auth: AuthService) { }

  ngOnInit() {
}

alta() {
  this.articulosServicio.alta(this.art).subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      this.router.navigate(['']);
    } else {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    }
  });
}

hayRegistros() {
  return true;
}

}
