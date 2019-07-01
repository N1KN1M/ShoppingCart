import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  passWord: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  validateAndLogin() {

  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
