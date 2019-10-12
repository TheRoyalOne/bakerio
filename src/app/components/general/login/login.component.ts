import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  prods: any[] = [];
  constructor(
    protected prodService: LoginService) { }

  ngOnInit() {
    this.prodService.getProds()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.prods = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
}

}
