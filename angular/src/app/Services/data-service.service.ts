import { Injectable } from '@angular/core';
import {ItemQuantity} from '../models/item/ItemQuantity';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  quantities: ItemQuantity[];
  totalCost: number;
  userName: string;
  constructor(public http: HttpClient, public router: Router) {
    this.quantities = [];
    this.totalCost = 0;
  }
  getItems(): Observable<any> {
    return this.http.get('http://192.168.33.10:8080/post');
  }

  redirectIfInvalid() {
    if (sessionStorage.length === 0) {
      this.router.navigateByUrl('');
    }
  }
}
