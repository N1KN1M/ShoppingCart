import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../../models/userdata/UserData';
import {DataServiceService} from '../../Services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = new UserData();
  verified = true;
  constructor(private router: Router, public http: HttpClient, public dataService: DataServiceService) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.router.navigateByUrl('shop');
    }
  }
  validateAndLogin() {
    const url = 'http://localhost:8080/validate';
    this.http.post(url, this.userData).subscribe(
      res => {
        if (null !== res && res === true) {
          console.log('success');
          this.router.navigateByUrl('/shop');
          sessionStorage.setItem('user', this.userData.username);
          this.dataService.userName = this.userData.username;
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
