import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './components/general/user-model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(public Auth: AuthService) {
      this.start = '37.7397,-121.4252';
      this.finish = '37.6819,-121.7680';
  }
  title = 'bakerio';

  submitted = false;
  // tslint:disable-next-line:member-ordering
  public start: string;
  public finish: string;

  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {
    this.Auth.cuenta().subscribe(datos => {
        // tslint:disable-next-line:no-string-literal
        this.Auth.vato = datos['usuario'];
        // tslint:disable-next-line:no-string-literal
        console.log(this.Auth.vato );
    });
}
}
