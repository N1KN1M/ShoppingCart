import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  hamburger = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
  hamburgerClick() {
    this.hamburger = !this.hamburger;
  }
}
