import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) { }
a = null;
  ngOnInit() {
}
bendecir() {
  this.Auth.bendecir(this.a).subscribe(datos => {
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
loginUser(event: { preventDefault: () => void; target: any; }) {
  event.preventDefault();
  const target = event.target;
  const username = target.querySelector('#user').value;
  const password = target.querySelector('#pass').value;
  this.Auth.getUserDetails(username, password).subscribe(data => {
    if (data.success) {
        this.router.navigate(['user/profile']);
        this.entrada();
        this.asignacion();
        this.cuenta();
    } else {
      window.alert(data.message);
    }
  });
  console.log(username, password);
}
entrada() {
  this.Auth.entrada().subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    }
  });
}

asignacion() {
  this.Auth.asignacion().subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
      // tslint:disable-next-line:no-string-literal
      this.Auth.vato = datos['usuario'];
      // tslint:disable-next-line:no-string-literal
      console.log(this.Auth.vato );
    }
  });
}
cuenta() {
}
chequeo() {
  this.Auth.check().subscribe(datos => {
    // tslint:disable-next-line:no-string-literal
    if (datos['resultado'] === 'OK') {
      // tslint:disable-next-line:no-string-literal
      alert(datos['mensaje']);
    } else {
    }
  });
}
}
