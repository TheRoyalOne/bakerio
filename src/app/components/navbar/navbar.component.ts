import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  public appName: String = 'Baker.io';
  constructor() { }

  ngOnInit() {
  }

}
