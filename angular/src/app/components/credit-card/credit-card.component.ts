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
  cardNumber: string;
  expiryMMSelect: number[];
  expiryYYYYSelect: number[];
  validCVV = true;
  validCardNumber = true;

  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.redirectIfInvalid();
    this.expiryMMSelect = Array.from(new Array(12), ( val , index ) => index + 1);
    this.expiryYYYYSelect = Array.from(new Array(10), ( val , index ) => index + 2019);
  }
  validateCCAndPay() {
    this.validCVV = this.validateCVV();
    this.validCardNumber = this.validateCardNumber();
    if (this.validCVV && this.validCardNumber) {
      this.successMsg = true;
    }
  }

  validateCVV() {
    if (!this.cvv.match('^[0-9]{3,4}$')) {
      return false;
    }
    return true;
  }

  validateCardNumber() {
    if (!this.cardNumber.match('^[0-9]{16}$')) {
      return false;
    }
    return true;
  }
}
