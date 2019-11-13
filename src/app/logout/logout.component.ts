import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../components/general/usuario/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: DataService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.salida();
    this.user.logout().subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
      } else {
        window.alert('Some problem');
      }
    });
  }
  salida() {
    this.auth.salida().subscribe(datos => {
      // tslint:disable-next-line:no-string-literal
      if (datos['resultado'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        alert(datos['mensaje']);
      }
    });
  }

}
