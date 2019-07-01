import { Component, OnInit } from '@angular/core';
import {UserData} from '../../models/userdata/UserData';
import {HttpClient} from '@angular/common/http';


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
  verification = false;
  availableUser = true;


  userData: UserData = new UserData();
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    this.validName = this.validateName();
    this.validEmail = this.validateEmail();
    this.validPhone = this.validatePhone();
    this.validPassword = this.validatePassword();
    this.validConfirmPass = this.validateConfirmPassword();
    this.validUserName = this.validateUserName();
    this.verification = this.validName && this.validEmail && this.validPhone &&
      this.validPassword && this.validUserName && this.validConfirmPass;



    // if (this.validPassword ) {
    //
    //   // After validation
    //   this.http.post<UserData>('http://localhost:8080/post', this.userData).subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );
    // }
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
    return this.userNameAvailability();
  }

  userNameAvailability(): boolean {
    const url = 'http://localhost:8080/availability';
    this.http.post<boolean>(url, this.userData.username).subscribe(
      res => {
        console.log(res);
      }
    );
    return true;
  }
}
