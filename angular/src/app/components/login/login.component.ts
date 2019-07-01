import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../../models/userdata/UserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = new UserData();
  verified = true;
  constructor(private router: Router, public http: HttpClient) { }

  ngOnInit() {
  }
  validateAndLogin() {
    const url = 'http://localhost:8080/validate';
    this.http.post(url, this.userData).subscribe(
      res => {
        if (null !== res && res === true) {
          this.router.navigateByUrl('/shop');
        } else if ( null !== res) {
          this.verified = false;
        }
      }
    );
  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
