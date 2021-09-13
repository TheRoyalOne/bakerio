import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { DataService } from '../usuario/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  usuarios: any[] = [];
  message = '';
  constructor(
    protected usuarioService: UsuarioService, private data: DataService,
    private router: Router, public Auth: AuthService) { }

  ngOnInit() {
    this.usuarioService.bendecir(this.usuarios).subscribe(datos => {
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
    this.usuarioService.retardos(this.usuarios).subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'YES') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      } else {
      }
    });
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
