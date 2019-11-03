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
    this.user.logout().subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
      } else {
        window.alert('Some problem');
      }
    });
  }

}
