import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { DataService } from '../usuario/data.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  usuarios: any[] = [];
  message = '';
  constructor(
    protected usuarioService: UsuarioService, private data: DataService) { }

  ngOnInit() {
    this.data.getSomeData().subscribe(data => {
      this.message = data.message;
      if (!data.success) {
        localStorage.removeItem('loggedIn');
      }
    });
    this.usuarioService.notis()
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
