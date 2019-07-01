import { Component, OnInit } from '@angular/core';
import {UserData} from '../../models/userdata/UserData';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword: string;

  validPhone = true;
  validName = true;
  validEmail = true;
  validUserName = true;
  validPassword = true;
  validConfirmPass = true;
  verified = false;
  existingUser = false;
  userData: UserData = new UserData();
  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.validUserName = this.validateUserName();
    this.validName = this.validateName();
    this.validEmail = this.validateEmail();
    this.validPhone = this.validatePhone();
    this.validPassword = this.validatePassword();
    this.validConfirmPass = this.validateConfirmPassword();
    console.log('existingUser value at validation time: ' + this.existingUser);
    this.userNameAvailability();
  }

  validateName(): boolean {
    if (!this.userData.name.match('^[a-zA-Z]+(\\s[a-zA-Z]+)*$')) {
      return false;
    }
    return true;
  }

  validateEmail(): boolean {
    if (!this.userData.email.match('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')) {
      return false;
    }
    return true;
  }

  validatePhone(): boolean {
    if (!this.userData.phone.match('^[6-9]\\d{9}$')) {
      return false;
    }
    return true;
  }

  validatePassword(): boolean {
    if (!this.userData.password.match('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$')) {
      return false;
    }
    return true;
  }
  validateConfirmPassword(): boolean {
    if (this.confirmPassword !== this.userData.password) {
      return false;
    }
    return true;
  }

  validateUserName(): boolean {
    if (!this.userData.username.match('^([a-zA-Z0-9])*$')) {
      return false;
    }
    return true;

  }

  userNameAvailability() {
    const url = 'http://localhost:8080/availability';

    this.http.post<boolean>(url, this.userData.username).subscribe(
      res => {
        this.existingUser = res;
        console.log('inside: ' + this.existingUser);
        this.acceptRejectData();
      }
    );

  }

  acceptRejectData() {
    this.verified = this.validName && this.validEmail && this.validPhone &&
      this.validPassword && this.validUserName && this.validConfirmPass && !this.existingUser;

    if (this.verified ) {

      // After validation
      this.http.post<UserData>('http://localhost:8080/post', this.userData).subscribe(
        res => {
          console.log('Added to database: ' + res);
        },
        err => {
          console.log('Error: ' + err);
        }
      );
    }
  }

  goToLogin() {
    this.router.navigateByUrl('');
  }
}
