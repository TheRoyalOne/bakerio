import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
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
    this.usuarioService.getUsers()
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
