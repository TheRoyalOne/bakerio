import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './components/general/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bakerio';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(
    protected userService: UserService
  ) {
  }
  ngOnInit() {
}
}
