import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../admin/usuarios/usuarios.service';

@Component({
  selector: 'app-recetario-a',
  templateUrl: './recetario-a.component.html',
  styleUrls: ['./recetario-a.component.css']
})
export class RecetarioAComponent implements OnInit {
  usuarios: any[] = [];
  art = {
  id: null,
  cant: null
  };
  constructor(
    protected usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsersf()
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
  alta(prod, can) {
    this.art.id = prod;
    this.art.cant = can;
    console.log(this.art.id);
    console.log(this.art.cant);
    this.usuariosService.altilla(this.art).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      } else {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      }
    });

  }
  obtenerCosa(id) {
    console.log(id);
  }
}

