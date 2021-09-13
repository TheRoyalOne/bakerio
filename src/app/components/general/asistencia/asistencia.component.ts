import { Component, OnInit } from '@angular/core';
import { DataService } from '../usuario/data.service';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  usuarios: any[] = [];
  message = '';
  constructor(
    protected usuarioService: UsuarioService, private data: DataService) { }

  ngOnInit() {
    this.usuarioService.getHelp()
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
