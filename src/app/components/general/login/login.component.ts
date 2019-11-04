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

  ngOnInit() {
}

loginUser(event: { preventDefault: () => void; target: any; }) {
  event.preventDefault();
  const target = event.target;
  const username = target.querySelector('#user').value;
  const password = target.querySelector('#pass').value;
  this.Auth.getUserDetails(username, password).subscribe(data => {
    if (data.success) {
        this.router.navigate(['user/profile']);
        this.Auth.setLoggedIn(true);
    } else {
      window.alert(data.message);
    }
  });
  console.log(username, password);
}

}
