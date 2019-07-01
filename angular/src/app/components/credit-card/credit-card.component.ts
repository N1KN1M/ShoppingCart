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

  validCVV: boolean;
  validCardNumber: boolean;
  validexpiryMonth: boolean;
  validexpiryYear: boolean;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {

  }
  validateCCAndPay() {
    this.successMsg = true;
  }

  validateCVV() {
    if (!this.cvv.match('^[0-9]{3,4}$')) {
      return false;
    }
    return true;
  }
}
