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
  userData: UserData = new UserData();
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    this.http.post<UserData>('http://localhost:8080/post', this.userData).subscribe(
      res => {
        console.log(res);
      },
      err => {

      }
    );
  }
}
