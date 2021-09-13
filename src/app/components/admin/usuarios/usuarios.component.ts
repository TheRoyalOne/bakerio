import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  a = {
  };
  constructor(
    protected usuariosService: UsuariosService, private router: Router, public Auth: AuthService) { }

  ngOnInit() {
    this.bendecir();
    this.usuariosService.getUsers()
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
bendecir() {
  this.usuariosService.bendecir(this.a).subscribe(datos => {
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
  obtenerCosa(id) {
    console.log(id);
  }
}

