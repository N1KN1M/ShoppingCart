import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../Services/data-service.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  successMsg: boolean;
  expiryMonth: number;
  expiryYear: number;
  cvv: string;
  cardNumber: number;
  expiryMMSelect: number[];
  expiryYYYYSelect: number[];
  validCVV: boolean;
  validCardNumber: boolean;
  validexpiryMonth: boolean;
  validexpiryYear: boolean;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.expiryMMSelect = Array.from(new Array(12),( val , index ) => index + 1);
    this.expiryYYYYSelect = Array.from(new Array(10),( val , index ) => index + 2019);
  }
  validateCCAndPay() {
    if(this.validateCVV()) {
      this.successMsg = true;
    }
  }

  validateCVV() {
    if (!this.cvv.match('^[0-9]{3,4}$')) {
      return false;
    }
    return true;
  }
}
