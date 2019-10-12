import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bakerio';
  users: any[] = [];
  constructor(
    protected userService: UserService
  ) {
  }
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Successs
        // tslint:disable-next-line:no-string-literal
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
}
}
