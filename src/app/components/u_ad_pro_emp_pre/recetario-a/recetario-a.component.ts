import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../admin/usuarios/usuarios.service';

@Component({
  selector: 'app-recetario-a',
  templateUrl: './recetario-a.component.html',
  styleUrls: ['./recetario-a.component.css']
})
export class RecetarioAComponent implements OnInit {
  usuarios: any[] = [];
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
  obtenerCosa(id) {
    console.log(id);
  }
}

