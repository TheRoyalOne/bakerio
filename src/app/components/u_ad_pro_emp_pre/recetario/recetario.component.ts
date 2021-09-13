import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../general/usuario/usuario.service';
import { DataService } from '../../general/usuario/data.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.css']
})
export class RecetarioComponent implements OnInit {
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
