(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/checkout/checkout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<table align=\"center\">-->\r\n  <!--<thead>-->\r\n    <!--<tr align=\"center\">-->\r\n      <!--<th>Name</th>-->\r\n      <!--<th>Price</th>-->\r\n      <!--<th>Quantity</th>-->\r\n    <!--</tr>-->\r\n  <!--</thead>-->\r\n  <!--<tbody>-->\r\n  <!--<tr *ngFor=\"let record of dataService.quantities\" align=\"center\">-->\r\n    <!--<ng-container *ngIf=\"record.quantity>0\">-->\r\n      <!--<td>{{record.item.name}}</td>-->\r\n      <!--<td>{{record.item.price}}</td>-->\r\n      <!--<td>{{record.quantity}}</td>-->\r\n    <!--</ng-container>-->\r\n  <!--</tr>-->\r\n  <!--</tbody>-->\r\n<!--</table>-->\r\n<!--<div align=\"center\"> Total: {{this.dataService.totalCost}}</div>-->\r\n<!--<div>-->\r\n  <!--<span>Payment Options:</span>-->\r\n  <!--<mat-radio-group [(ngModel)] = \"paymentType\" aria-label=\"Select an option\">-->\r\n    <!--<mat-radio-button  value=\"upi\" >UPI</mat-radio-button>-->\r\n    <!--<mat-radio-button  value=\"creditCard\">Credit Card</mat-radio-button>-->\r\n  <!--</mat-radio-group>-->\r\n<!--</div>-->\r\n<!--<div align=\"center\"><button mat-raised-button (click)=\"goToPaymentPage()\">Proceed to Pay</button></div>-->\r\n\r\n<!--aasdasdasdasdasdasdasdasdasdasdasdasddasd-->\r\n<body>\r\n  <app-nav-bar></app-nav-bar>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Cart</h5>\r\n            <form (ngSubmit)=\"goToPaymentPage()\">\r\n              <div class=\"form-row d-flex\">\r\n                <div class=\"p-2 form-group text-center mx-auto item\">Name</div>\r\n                <div class=\"p-2 form-group text-center mx-auto item\">Price</div>\r\n                <div class=\"p-2 form-group text-center mx-auto item\">Quantity</div>\r\n              </div>\r\n\r\n              <div class=\"form-row d-flex \" *ngFor=\"let record of dataService.quantities\">\r\n                <ng-container *ngIf=\"record.quantity>0\">\r\n                  <div class=\"p-2 form-group text-center mx-auto item\">{{record.item.name}}</div>\r\n                  <div class=\"p-2 form-group text-center mx-auto item\">{{record.item.price}}</div>\r\n                  <div class=\"p-2 form-group text-center mx-auto item\">{{record.quantity}}</div>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <hr class=\"my-6\">\r\n\r\n\r\n              <label>Payment Methods</label>\r\n              <div class=\"toggle \">\r\n                <input type=\"radio\" name=\"paymentMethod\" value=\"upi\" id=\"upi\" [(ngModel)] = \"paymentType\"/>\r\n                <label for=\"upi\">UPI</label>\r\n                <input type=\"radio\" name=\"paymentMethod\" value=\"creditCard\" id=\"creditCard\" [(ngModel)] = \"paymentType\"/>\r\n                <label for=\"creditCard\">Credit Card</label>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"wrapper\">\r\n                <button type=\"submit\" name = \"Checkout\" class =\"btn btn-outline-dark btn-block\">Pay Now!</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/credit-card/credit-card.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/credit-card/credit-card.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-nav-bar></app-nav-bar>-->\r\n<!--<div>-->\r\n  <!--<div>To pay: {{this.dataService.totalCost}}</div>-->\r\n  <!--<form class=\"credit-card-form\" (ngSubmit)=\"validateCCAndPay()\">-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<mat-form-field class=\"ccPayment\">-->\r\n        <!--<input matInput placeholder=\"Card Number\" name=\"cardNumber\" id=\"cardNumber\" required #cardNum=\"ngModel\" [(ngModel)]=\"cardNumber\">-->\r\n      <!--</mat-form-field>-->\r\n      <!--<label *ngIf=\"!validCardNumber\">Please enter a valid Card Number!</label>-->\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<mat-form-field class=\"ccPayment\">-->\r\n        <!--<mat-label>Expiry Month</mat-label>-->\r\n\r\n        <!--<mat-select [(ngModel)]=\"expiryMonth\" name=\"selectMonth\" required #expiryMM=\"ngModel\">-->\r\n          <!--<mat-option *ngFor=\"let month of expiryMMSelect\" [value] = month >{{month}}</mat-option>-->\r\n        <!--</mat-select>-->\r\n\r\n      <!--</mat-form-field> ,-->\r\n\r\n      <!--<mat-form-field>-->\r\n        <!--<mat-label>Expiry Year</mat-label>-->\r\n\r\n        <!--<mat-select [(ngModel)]=\"expiryYear\" name=\"selectYear\" required #expiryYYYY=\"ngModel\">-->\r\n          <!--<mat-option *ngFor=\"let year of expiryYYYYSelect\" [value] = year >{{year}}</mat-option>-->\r\n        <!--</mat-select>-->\r\n\r\n      <!--</mat-form-field>-->\r\n\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<mat-form-field class=\"ccPayment\">-->\r\n        <!--<input matInput placeholder=\"CVV\" name=\"cvv\" id=\"cvv\" required #CVV=\"ngModel\" [(ngModel)]=\"cvv\">-->\r\n\r\n      <!--</mat-form-field>-->\r\n      <!--<mat-label *ngIf=\"!validCVV\">Please Enter a valid CVV</mat-label>-->\r\n    <!--</div>-->\r\n    <!--<button mat-raised-button type=\"submit\" [disabled]=\"!cardNum.valid || !CVV.valid || !expiryYYYY.valid || !expiryMM.valid\">Pay!</button>-->\r\n  <!--</form>-->\r\n  <!--<div class=\"success\" *ngIf=\"successMsg\">-->\r\n    <!--<p>Payment Successful!</p>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--asdasdasdasdasdasdasdasdasdasdasasd-->\r\n\r\n\r\n<body>\r\n<app-nav-bar></app-nav-bar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n      <div class=\"card card-signin my-5\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-center\">Credit Card Payment</h5>\r\n          <label>To pay: {{this.dataService.totalCost}}</label>\r\n          <hr class=\"my-6\">\r\n          <form class=\"form-signin\" (ngSubmit)=\"validateCCAndPay()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"text-center warning\" *ngIf=\"!validCardNumber\"><span>Please enter a valid Card Number!</span></div>\r\n\r\n              <label for=\"cardNumber\">Card Number</label>\r\n              <input name=\"cardNumber\" id=\"cardNumber\" class=\"form-control\" required #cardNum=\"ngModel\" [(ngModel)]=\"cardNumber\">\r\n            </div>\r\n\r\n            <div class=\"form-group contain\">\r\n              <div class=\" expiry float-left\">\r\n                <label for=\"selectMonth\">Expiry Month</label>\r\n                <select [(ngModel)]=\"expiryMonth\" class=\"form-control\" id=\"selectMonth\" name=\"selectMonth\" required #expiryMM=\"ngModel\">\r\n                  <option *ngFor=\"let month of expiryMMSelect\" [value] = month >{{month}}</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\" expiry float-right\">\r\n\r\n                <label for=\"selectYear\">Expiry Year</label>\r\n                <select [(ngModel)]=\"expiryYear\" class=\"form-control\" id=\"selectYear\" name=\"selectYear\" required #expiryYYYY=\"ngModel\">\r\n                  <option *ngFor=\"let year of expiryYYYYSelect\" [value] = year >{{year}}</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"text-center warning\" *ngIf=\"!validCVV\"><span>Please Enter a valid CVV</span></div>\r\n\r\n              <label for=\"cardNumber\">CVV</label>\r\n              <input name=\"cvv\" type=\"password\" id=\"cvv\" class=\"form-control\" required #CVV=\"ngModel\" [(ngModel)]=\"cvv\">\r\n            </div>\r\n\r\n\r\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!cardNum.valid || !CVV.valid || !expiryYYYY.valid || !expiryMM.valid\">Pay!</button>\r\n            <hr class=\"my-4\" *ngIf=\"successMsg\">\r\n            <div class=\"form-group\" *ngIf=\"successMsg\">\r\n              Payment Successful!\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/items/items.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/items/items.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<form (ngSubmit)=\"goToCart()\">-->\r\n  <!--<table class=\"fixed\" align=\"center\">-->\r\n\r\n    <!--<thead>-->\r\n    <!--<app-header></app-header>-->\r\n    <!--</thead>-->\r\n    <!--<tbody>-->\r\n        <!--<app-quantity-selector *ngFor=\"let itemQuantity of dataService.quantities\" [itemQuantity]=\"itemQuantity\">-->\r\n        <!--</app-quantity-selector>-->\r\n    <!--</tbody>-->\r\n  <!--</table>-->\r\n  <!--<div class=\"wrapper\">-->\r\n    <!--<button mat-raised-button type=\"submit\" name = \"Checkout\" class =\"button\">Checkout</button>-->\r\n  <!--</div>-->\r\n<!--</form>-->\r\n\r\n\r\n<!--asdasdsadasasdasdas-->\r\n<body>\r\n  <app-nav-bar></app-nav-bar>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Shop is open for Business!</h5>\r\n            <form (ngSubmit)=\"goToCart()\">\r\n              <hr class=\"my-6\">\r\n              <div class=\"form-row d-flex\">\r\n                <div class=\"p-2 mx-auto form-group text-center item\">Name</div>\r\n                <div class=\"p-2 mx-auto form-group text-center item\">Price</div>\r\n                <div class=\"p-2 mx-auto form-group text-center quantity\">Quantity</div>\r\n              </div>\r\n\r\n              <app-quantity-selector class=\"form-row d-flex \" *ngFor=\"let itemQuantity of dataService.quantities\" [itemQuantity]=\"itemQuantity\"></app-quantity-selector>\r\n              <hr class=\"my-6\">\r\n              <div class=\"wrapper\">\r\n\r\n                <button type=\"submit\" name = \"Checkout\" class =\"btn btn-outline-primary btn-block\">Checkout</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/nav-bar/nav-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/nav-bar/nav-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\n  <!--<div >-->\n    <!--<button mat-raised-button (click)=\"goToHome()\" >Home</button>-->\n    <!--<button mat-raised-button (click)=\"logOut()\" class=\"logout\">Logout</button>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--asdasdasdasdsadasdasdasdasd-->\n\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link links\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <button (click)=\"logOut()\" class=\"btn logout nav-link links\">Logout</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"loginForm\">-->\r\n  <!--<div>Login:</div>-->\r\n  <!--<form class=\"\" (ngSubmit)=\"validateAndLogin()\">-->\r\n\r\n    <!--<label *ngIf=\"!verified\">Invalid credentials!</label>-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<mat-form-field class=\"login\">-->\r\n        <!--&lt;!&ndash;<input matInput placeholder=\"Username\" name=\"username\" id=\"username\" required #username=\"ngModel\" [(ngModel)]=\"userData.username\">&ndash;&gt;-->\r\n      <!--</mat-form-field>-->\r\n    <!--</div>-->\r\n\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<mat-form-field class=\"login\">-->\r\n        <!--&lt;!&ndash;<input matInput placeholder=\"Password\" name=\"password\" id=\"password\" type = \"password\" required #password=\"ngModel\" [(ngModel)]=\"userData.password\">&ndash;&gt;-->\r\n      <!--</mat-form-field>-->\r\n    <!--</div>-->\r\n    <!--<button mat-raised-button type=\"submit\" [disabled]=\"!username.valid || !password.valid\">Log In!</button>-->\r\n    <!--<button mat-raised-button type= \"button\" (click)=\"goToRegister()\">Register</button>-->\r\n  <!--</form>-->\r\n<!--</div>-->\r\n\r\n\r\n<!--asdasdasdasdasdasdasdasdads-->\r\n\r\n<!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->\r\n\r\n<body>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n      <div class=\"card card-signin my-5\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-center\">Welcome!</h5>\r\n          <form class=\"form-signin\" (ngSubmit)=\"validateAndLogin()\">\r\n            <div class=\"text-center warning\" *ngIf=\"!verified\">Invalid credentials!</div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input class=\"form-control input-mysize\" name=\"username\" id=\"username\" required autofocus #username=\"ngModel\" [(ngModel)]=\"userData.username\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input class=\"form-control input-mysize\" name=\"password\" id=\"password\" type = \"password\" required autofocus #password=\"ngModel\" [(ngModel)]=\"userData.password\">\r\n            </div>\r\n\r\n            <hr class=\"my-6\">\r\n            <button class=\"btn btn-lg btn-block text-uppercase btn-primary\" type=\"submit\" [disabled]=\"!username.valid || !password.valid\">Sign in</button>\r\n            <button class=\"btn btn-secondary text-uppercase btn-block \" (click)=\"goToRegister()\">\r\n              Register\r\n            </button>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/quantity-selector/quantity-selector.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/quantity-selector/quantity-selector.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<tr align=\"center\">-->\r\n  <!--<td>{{itemQuantity.item.name}}</td>-->\r\n  <!--<td>{{itemQuantity.item.price}}</td>-->\r\n  <!--<td>-->\r\n    <!--<button mat-mini-fab (click)=\"onDecrease()\" class=\"dec\" type=\"button\">-</button>-->\r\n    <!--{{itemQuantity.quantity}}-->\r\n    <!--<button mat-mini-fab (click)=\"onIncrease()\" class=\"inc\" type = \"button\">+</button>-->\r\n  <!--</td>-->\r\n<!--</tr>-->\r\n<!--<br/>-->\r\n\r\n\r\n<!--adsasdasdasdasdasdasdasdasd-->\r\n\r\n\r\n<!--<div class=\"form-group col-md-3 text-center\">{{itemQuantity.item.name}}</div>-->\r\n<!--<div class=\"form-group col-md-3 text-center\">{{itemQuantity.item.price}}</div>-->\r\n<!--<div class=\" col-md-2 \">-->\r\n  <!--<button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"onDecrease()\">-</button>-->\r\n<!--</div>-->\r\n<!--<div class=\"form-group col-md-2 text-center\">-->\r\n  <!--{{itemQuantity.quantity}}-->\r\n<!--</div>-->\r\n<!--<div class=\" col-md-2 \">-->\r\n  <!--<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onIncrease()\">+</button>-->\r\n<!--</div>-->\r\n\r\n<!--<br/>-->\r\n\r\n<!--asdasdasdasdasdasddas-->\r\n\r\n<div class=\"form-group p-2 mx-auto text-center item\">{{itemQuantity.item.name}}</div>\r\n<div class=\"form-group p-2 mx-auto text-center item\">{{itemQuantity.item.price}}</div>\r\n<div class=\" p-2 mx-auto text-center quantity \">\r\n  <button type=\"button\" class=\" btn btn-outline-danger mx-auto p-2\" (click)=\"onDecrease()\">-</button>\r\n\r\n<label class=\" text-center mx-auto p-2\">{{itemQuantity.quantity}} </label>\r\n\r\n\r\n\r\n  <button type=\"button\" class=\" btn btn-outline-success mx-auto p-2\" (click)=\"onIncrease()\">+</button>\r\n\r\n</div>\r\n<br/>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"RegisterForm\">-->\n  <!--<div>Login:</div>-->\n  <!--<form class=\"register-form\" (ngSubmit)=\"register()\">-->\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"register\">-->\n        <!--<input placeholder=\"Name\" name=\"name\" id=\"name\" required #name=\"ngModel\" [(ngModel)]=\"this.userData.name\">-->\n        <!--<label *ngIf=\"!this.validName\">Please enter a valid Name!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"register\">-->\n        <!--<input matInput placeholder=\"Email Id\" name=\"email\" id=\"email\" required #email=\"ngModel\" [(ngModel)]=\"this.userData.email\">-->\n        <!--<label *ngIf=\"!this.validEmail\">Please enter a valid Email ID!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"register\">-->\n        <!--<input matInput placeholder=\"Phone Number\" name=\"phone\" id=\"phone\" required #phone=\"ngModel\" [(ngModel)]=\"this.userData.phone\">-->\n        <!--<label *ngIf=\"!this.validPhone\">Please enter a valid Phone Number!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"login\">-->\n        <!--<input matInput placeholder=\"UserName\" name=\"username\" id=\"username\" required #username=\"ngModel\" [(ngModel)]=\"this.userData.username\">-->\n        <!--<label *ngIf=\"!this.validUserName\">Please enter a valid UserName</label>-->\n        <!--<label *ngIf=\"this.existingUser\">Username is already Taken!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"login\">-->\n        <!--<input matInput placeholder=\"Password\" type = \"password\" name=\"password\" id=\"password\" required #password=\"ngModel\" [(ngModel)]=\"this.userData.password\">-->\n        <!--<label *ngIf=\"!this.validPassword\">Please enter a valid password!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<mat-form-field class=\"login\">-->\n        <!--<input matInput placeholder=\"Confirm Password\" type = \"password\" name=\"confPassword\" id=\"confPassword\" required #confPassword=\"ngModel\" [(ngModel)]=\"this.confirmPassword\">-->\n        <!--<label *ngIf=\"!this.validConfirmPass\">Passwords do not match!</label>-->\n      <!--</mat-form-field>-->\n    <!--</div>-->\n    <!--<button mat-raised-button type= \"submit\" [disabled]=\"!name.valid || !username.valid || !password.valid || !email.valid || !phone.valid || !confPassword.valid\">Register</button>-->\n    <!--<button mat-raised-button type= \"button\" (click)=\"goToLogin()\">Log In</button>-->\n\n  <!--</form>-->\n<!--</div>-->\n\n<!--asdasdasdasdasdasdasd-->\n\n\n<body>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Sign Up!</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"register()\">\n            <div class=\"form-group\">\n\n              <!--<input name=\"name\" id=\"name\" required #name=\"ngModel\" [(ngModel)]=\"this.userData.name\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validName\">Please enter a valid Name!</div>\n              <label for=\"name\">Name</label>\n              <input id=\"name\" name=\"name\"  class=\"form-control\" #name=\"ngModel\" [(ngModel)]=\"this.userData.name\" required autofocus>\n            </div>\n\n            <div class=\"form-group\">\n\n              <!--<input matInput placeholder=\"Email Id\" name=\"email\" id=\"email\" required #email=\"ngModel\" [(ngModel)]=\"this.userData.email\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validEmail\">Please enter a valid Email ID!</div>\n              <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" #email=\"ngModel\" [(ngModel)]=\"this.userData.email\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <!--<input matInput placeholder=\"Phone Number\" name=\"phone\" id=\"phone\" required #phone=\"ngModel\" [(ngModel)]=\"this.userData.phone\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validPhone\">Please enter a valid Phone Number!</div>\n              <label for=\"phone\">Phone</label>\n              <input id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"this.userData.phone\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <!--<input matInput placeholder=\"UserName\" name=\"username\" id=\"username\" required #username=\"ngModel\" [(ngModel)]=\"this.userData.username\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validUserName\">Please enter a valid UserName</div>\n              <div class=\"text-center warning\" *ngIf=\"this.existingUser\">Username is already Taken!</div>\n              <label for=\"username\">Username</label>\n              <input id=\"username\" name=\"username\" class=\"form-control\" #username=\"ngModel\" [(ngModel)]=\"this.userData.username\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <!--<input matInput placeholder=\"Password\" type = \"password\" name=\"password\" id=\"password\" required #password=\"ngModel\" [(ngModel)]=\"this.userData.password\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validPassword\">Please enter a valid password!</div>\n\n              <label for=\"password\">Password</label>\n              <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" #password=\"ngModel\" [(ngModel)]=\"this.userData.password\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <!--<input matInput placeholder=\"Confirm Password\" type = \"password\" name=\"confPassword\" id=\"confPassword\" required #confPassword=\"ngModel\" [(ngModel)]=\"this.confirmPassword\">-->\n              <div class=\"text-center warning\" *ngIf=\"!this.validConfirmPass\">Passwords do not match!</div>\n\n              <label for=\"confPassword\">Confirm Password</label>\n              <input id=\"confPassword\" name=\"confPassword\" class=\"form-control\" type=\"password\" #confPassword=\"ngModel\" [(ngModel)]=\"this.confirmPassword\" required>\n            </div>\n\n            <!--<hr class=\"my-4\">-->\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Register</button>\n            <hr class=\"my-6\">\n            <p class=\"text-center\">Already have an account?</p>\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" (click)=\"goToLogin()\">Sign In</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upi/upi.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upi/upi.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\r\n<!--<div>To pay: {{this.dataService.totalCost}}</div>-->\r\n<!--<form class=\"vpa-form\" (ngSubmit)=\"validateVPAAndPay()\">-->\r\n\r\n<!--<div class=\"form-group\">-->\r\n<!--<mat-form-field class=\"vpaPayment\">-->\r\n<!--<input matInput placeholder=\"VPA\" name=\"vpa\" id=\"vpa\" required #vpa=\"ngModel\" [(ngModel)]=\"vpaId\">-->\r\n<!--</mat-form-field>-->\r\n<!--<span *ngIf=\"vpa.invalid && vpa.touched\">Please enter VPA!</span>-->\r\n<!--</div>-->\r\n\r\n<!--<button mat-raised-button type=\"submit\" [disabled]=\"!vpa.valid\">Pay!</button>-->\r\n<!--</form>-->\r\n<!--<div class=\"success\" *ngIf=\"successMsg\">-->\r\n<!--<p>Payment Successful!</p>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--adasdasdasdasdasdasdasasdasdasdasd-->\r\n\r\n<body>\r\n<app-nav-bar></app-nav-bar>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">UPI Payment</h5>\r\n            <form (ngSubmit)=\"validateVPAAndPay()\">\r\n              <div>To pay: {{this.dataService.totalCost}}</div>\r\n              <hr class=\"my-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"vpa\">VPA</label>\r\n                <input name=\"vpa\" id=\"vpa\" class=\"form-control input-mysize\" required #vpa=\"ngModel\" [(ngModel)]=\"vpaId\">\r\n              </div>\r\n\r\n\r\n              <button class=\"btn btn-lg btn-block text-uppercase btn-primary\" type=\"submit\" [disabled]=\"!vpa.valid\">Pay!</button>\r\n              <hr class=\"my-4\" *ngIf=\"successMsg\">\r\n              <div class=\"form-group\" *ngIf=\"successMsg\">\r\n                Payment Successful!\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/Services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DataServiceService = class DataServiceService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.quantities = [];
        this.totalCost = 0;
    }
    getItems() {
        return this.http.get('http://localhost:8080/post');
    }
    redirectIfInvalid() {
        if (sessionStorage.length === 0) {
            this.router.navigateByUrl('');
        }
    }
};
DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DataServiceService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ShoppingCart';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/items/items.component */ "./src/app/components/items/items.component.ts");
/* harmony import */ var _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quantity-selector/quantity-selector.component */ "./src/app/components/quantity-selector/quantity-selector.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_upi_upi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/upi/upi.component */ "./src/app/components/upi/upi.component.ts");
/* harmony import */ var _components_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/credit-card/credit-card.component */ "./src/app/components/credit-card/credit-card.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/layout/nav-bar/nav-bar.component */ "./src/app/components/layout/nav-bar/nav-bar.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
            _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__["QuantitySelectorComponent"],
            _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
            _components_upi_upi_component__WEBPACK_IMPORTED_MODULE_13__["UPIComponent"],
            _components_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_14__["CreditCardComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
            _components_layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavBarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
                { path: 'checkout', component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"] },
                { path: 'payment/upi', component: _components_upi_upi_component__WEBPACK_IMPORTED_MODULE_13__["UPIComponent"] },
                { path: 'payment/creditCard', component: _components_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_14__["CreditCardComponent"] },
                { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
                { path: 'shop', component: _components_items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*th{*/\r\n  /*width: 150px;*/\r\n  /*text-align: center;*/\r\n  /*background-color: #4CAF50;*/\r\n  /*color: white;*/\r\n  /*height: 20px;*/\r\n  /*}*/\r\n  body {\r\n  min-height: 657px;\r\n  background: #007bff;\r\n\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n  /*asdasdasdasdasdasdasdasdasdasdasdasd*/\r\n  /* VARS */\r\n  /* MIXINS */\r\n  /* STYLE THE HTML ELEMENTS (INCLUDES RESETS FOR THE DEFAULT FIELDSET AND LEGEND STYLES) */\r\n  fieldset {\r\n  margin: 0;\r\n  padding: 2rem;\r\n  box-sizing: border-box;\r\n  display: block;\r\n  border: none;\r\n  border: solid 1px #CCC;\r\n  min-width: 0;\r\n  background-color: #FFF;\r\n}\r\n  fieldset legend {\r\n  margin: 0 0 1.5rem;\r\n  padding: 0;\r\n  width: 100%;\r\n  float: left;\r\n  display: table;\r\n  font-size: 1.5rem;\r\n  line-height: 140%;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n  fieldset legend + * {\r\n  clear: both;\r\n}\r\n  /* TOGGLE STYLING */\r\n  .toggle {\r\n  margin: 0 0 1.5rem;\r\n  box-sizing: border-box;\r\n  font-size: 0;\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n  align-items: stretch;\r\n}\r\n  .toggle input {\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  left: -9999px;\r\n}\r\n  .toggle input + label {\r\n  margin: 0;\r\n  padding: .75rem 2rem;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: inline-block;\r\n  border: solid 1px #DDD;\r\n  background-color: #FFF;\r\n  font-size: 1rem;\r\n  line-height: 140%;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  box-shadow: 0 0 0 rgba(255, 255, 255, 0);\r\n  transition: border-color .15s ease-out,  color .25s ease-out,  background-color .15s ease-out, box-shadow .15s ease-out;\r\n  /* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */\r\n  /*flex: 0 0 50%; display: flex; justify-content: center; align-items: center;*/\r\n  /* ----- */\r\n}\r\n  .toggle input + label:first-of-type {\r\n  border-radius: 6px 0 0 6px;\r\n  border-right: none;\r\n}\r\n  .toggle input + label:last-of-type {\r\n  border-radius: 0 6px 6px 0;\r\n  border-left: none;\r\n}\r\n  .toggle input:hover + label {\r\n  border-color: #213140;\r\n}\r\n  .toggle input:checked + label {\r\n  background-color: #4B9DEA;\r\n  color: #FFF;\r\n  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);\r\n  border-color: #4B9DEA;\r\n  z-index: 1;\r\n}\r\n  .toggle input:focus + label {\r\n  outline: dotted 1px #CCC;\r\n  outline-offset: .45rem;\r\n}\r\n  /* STYLING FOR THE STATUS HELPER TEXT FOR THE DEMO */\r\n  .status {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n  .status span {\r\n  font-weight: 600;\r\n  color: #B6985A;\r\n}\r\n  .status span:first-of-type {\r\n  display: inline;\r\n}\r\n  .status span:last-of-type {\r\n  display: none;\r\n}\r\n  @media (max-width: 800px) {\r\n  .status span:first-of-type {\r\n    display: none;\r\n  }\r\n  .status span:last-of-type {\r\n    display: inline;\r\n  }\r\n}\r\n  .card-title{\r\n  margin-bottom: 40px;\r\n}\r\n  .item{\r\n  width:33%;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07RUFDSixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2xCLElBQUk7RUFDSjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7O0VBRW5CLHVEQUF1RDtBQUN6RDtFQUVBLHVDQUF1QztFQUl2QyxTQUFTO0VBQ1QsV0FBVztFQUNYLHlGQUF5RjtFQUd6RjtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0VBQ0E7RUFDRSxXQUFXO0FBQ2I7RUFJQSxtQkFBbUI7RUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixvQkFBb0I7QUFDdEI7RUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtFQUNBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsdUhBQXVIO0VBQ3ZILGlFQUFpRTtFQUNqRSw4RUFBOEU7RUFDOUUsVUFBVTtBQUNaO0VBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCO0VBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25CO0VBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7RUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7RUFHQSxvREFBb0Q7RUFDcEQ7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGVBQWU7QUFDakI7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0VBR0E7RUFDRSxTQUFTOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0aHsqL1xyXG4gIC8qd2lkdGg6IDE1MHB4OyovXHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7Ki9cclxuICAvKmNvbG9yOiB3aGl0ZTsqL1xyXG4gIC8qaGVpZ2h0OiAyMHB4OyovXHJcbi8qfSovXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDY1N3B4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcbn1cclxuXHJcbi8qYXNkYXNkYXNkYXNkYXNkYXNkYXNkYXNkYXNkYXNkYXNkYXNkKi9cclxuXHJcblxyXG5cclxuLyogVkFSUyAqL1xyXG4vKiBNSVhJTlMgKi9cclxuLyogU1RZTEUgVEhFIEhUTUwgRUxFTUVOVFMgKElOQ0xVREVTIFJFU0VUUyBGT1IgVEhFIERFRkFVTFQgRklFTERTRVQgQU5EIExFR0VORCBTVFlMRVMpICovXHJcblxyXG5cclxuZmllbGRzZXQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNDQ0M7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuZmllbGRzZXQgbGVnZW5kIHtcclxuICBtYXJnaW46IDAgMCAxLjVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMTQwJTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbmZpZWxkc2V0IGxlZ2VuZCArICoge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFRPR0dMRSBTVFlMSU5HICovXHJcbi50b2dnbGUge1xyXG4gIG1hcmdpbjogMCAwIDEuNXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuLnRvZ2dsZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbi50b2dnbGUgaW5wdXQgKyBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IC43NXJlbSAycmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IHNvbGlkIDFweCAjREREO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1vdXQsICBjb2xvciAuMjVzIGVhc2Utb3V0LCAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2Utb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1vdXQ7XHJcbiAgLyogQUREIFRIRVNFIFBST1BFUlRJRVMgVE8gU1dJVENIIEZST00gQVVUTyBXSURUSCBUTyBGVUxMIFdJRFRIICovXHJcbiAgLypmbGV4OiAwIDAgNTAlOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xyXG4gIC8qIC0tLS0tICovXHJcbn1cclxuLnRvZ2dsZSBpbnB1dCArIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG4udG9nZ2xlIGlucHV0ICsgbGFiZWw6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG4udG9nZ2xlIGlucHV0OmhvdmVyICsgbGFiZWwge1xyXG4gIGJvcmRlci1jb2xvcjogIzIxMzE0MDtcclxufVxyXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCOURFQTtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDEwMiwgMTc5LCAyNTEsIDAuNSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNEI5REVBO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnRvZ2dsZSBpbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICBvdXRsaW5lOiBkb3R0ZWQgMXB4ICNDQ0M7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC40NXJlbTtcclxufVxyXG5cclxuXHJcbi8qIFNUWUxJTkcgRk9SIFRIRSBTVEFUVVMgSEVMUEVSIFRFWFQgRk9SIFRIRSBERU1PICovXHJcbi5zdGF0dXMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uc3RhdHVzIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNCNjk4NUE7XHJcbn1cclxuLnN0YXR1cyBzcGFuOmZpcnN0LW9mLXR5cGUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uc3RhdHVzIHNwYW46bGFzdC1vZi10eXBlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5zdGF0dXMgc3BhbjpmaXJzdC1vZi10eXBlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zdGF0dXMgc3BhbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gIHdpZHRoOjMzJTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/data-service.service */ "./src/app/Services/data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CheckoutComponent = class CheckoutComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.redirectIfInvalid();
        this.dataService.totalCost = this.calculateCost();
    }
    calculateCost() {
        let cost = 0;
        this.dataService.quantities.forEach((item) => {
            cost = cost + item.quantity * item.item.price;
        });
        return cost;
    }
    goToPaymentPage() {
        this.router.navigateByUrl('/payment/' + this.paymentType);
    }
};
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/checkout/checkout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/components/credit-card/credit-card.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/credit-card/credit-card.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expiry{\r\n  width: 50%;\r\n  padding: 1px;\r\n}\r\n\r\ndiv.contain {\r\n  display: inline-block;\r\n  width: 96%;\r\n}\r\n\r\n.card-title{\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.warning {\r\n  background: #fc2d7f;\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nbody  {\r\n  min-height: 700px;\r\n  background: #007bff;\r\n\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7O0VBRW5CLHVEQUF1RDtBQUN6RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlZGl0LWNhcmQvY3JlZGl0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBpcnl7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbmRpdi5jb250YWluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDk2JTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6ICNmYzJkN2Y7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuYm9keSAge1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/credit-card/credit-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/credit-card/credit-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreditCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardComponent", function() { return CreditCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/data-service.service */ "./src/app/Services/data-service.service.ts");



let CreditCardComponent = class CreditCardComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.validCVV = true;
        this.validCardNumber = true;
    }
    ngOnInit() {
        this.dataService.redirectIfInvalid();
        this.expiryMMSelect = Array.from(new Array(12), (val, index) => index + 1);
        this.expiryYYYYSelect = Array.from(new Array(10), (val, index) => index + 2019);
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
};
CreditCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credit-card',
        template: __webpack_require__(/*! raw-loader!./credit-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/credit-card/credit-card.component.html"),
        styles: [__webpack_require__(/*! ./credit-card.component.css */ "./src/app/components/credit-card/credit-card.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
], CreditCardComponent);



/***/ }),

/***/ "./src/app/components/items/items.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/items/items.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*button{*/\r\n  /*margin: auto;*/\r\n  /*display: block;*/\r\n  /*transition-duration: 0.4s;*/\r\n  /*}*/\r\n  /*app-quantity-selector,app-header,th,td,tr {*/\r\n  /*padding: 15px;*/\r\n  /*text-align: left;*/\r\n  /*}*/\r\n  /*.button {*/\r\n  /*background-color: white;*/\r\n  /*color: black;*/\r\n  /*border: 2px solid #008CBA;*/\r\n  /*}*/\r\n  /*.button:hover {*/\r\n  /*background-color: #008CBA;*/\r\n  /*color: white;*/\r\n  /*}*/\r\n  /*asdasdasdasdasdasdasd*/\r\n  .card-title{\r\n  margin-bottom: 40px;\r\n}\r\n  /*.headers {*/\r\n  /*margin:auto;*/\r\n  /*}*/\r\n  .item{\r\n  width:30%;\r\n}\r\n  .quantity{\r\n  width: 40%;\r\n}\r\n  body  {\r\n  min-height: 657px;\r\n  background: #007bff;\r\n\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy9pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7RUFDUixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUMvQixJQUFJO0VBRUosOENBQThDO0VBQzVDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDdEIsSUFBSTtFQUlKLFlBQVk7RUFDViwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUMvQixJQUFJO0VBRUosa0JBQWtCO0VBQ2hCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDbEIsSUFBSTtFQUdKLHdCQUF3QjtFQUV4QjtFQUNFLG1CQUFtQjtBQUNyQjtFQUVBLGFBQWE7RUFDWCxlQUFlO0VBRWpCLElBQUk7RUFFSjtFQUNFLFNBQVM7QUFDWDtFQUNBO0VBQ0UsVUFBVTtBQUNaO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1COztFQUVuQix1REFBdUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJ1dHRvbnsqL1xyXG4gIC8qbWFyZ2luOiBhdXRvOyovXHJcbiAgLypkaXNwbGF5OiBibG9jazsqL1xyXG4gIC8qdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsqL1xyXG4vKn0qL1xyXG5cclxuLyphcHAtcXVhbnRpdHktc2VsZWN0b3IsYXBwLWhlYWRlcix0aCx0ZCx0ciB7Ki9cclxuICAvKnBhZGRpbmc6IDE1cHg7Ki9cclxuICAvKnRleHQtYWxpZ246IGxlZnQ7Ki9cclxuLyp9Ki9cclxuXHJcblxyXG5cclxuLyouYnV0dG9uIHsqL1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Ki9cclxuICAvKmNvbG9yOiBibGFjazsqL1xyXG4gIC8qYm9yZGVyOiAycHggc29saWQgIzAwOENCQTsqL1xyXG4vKn0qL1xyXG5cclxuLyouYnV0dG9uOmhvdmVyIHsqL1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTsqL1xyXG4gIC8qY29sb3I6IHdoaXRlOyovXHJcbi8qfSovXHJcblxyXG5cclxuLyphc2Rhc2Rhc2Rhc2Rhc2Rhc2Rhc2QqL1xyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLyouaGVhZGVycyB7Ki9cclxuICAvKm1hcmdpbjphdXRvOyovXHJcblxyXG4vKn0qL1xyXG5cclxuLml0ZW17XHJcbiAgd2lkdGg6MzAlO1xyXG59XHJcbi5xdWFudGl0eXtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbmJvZHkgIHtcclxuICBtaW4taGVpZ2h0OiA2NTdweDtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/items/items.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/items/items.component.ts ***!
  \*****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_item_ItemQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/item/ItemQuantity */ "./src/app/models/item/ItemQuantity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/data-service.service */ "./src/app/Services/data-service.service.ts");





let ItemsComponent = class ItemsComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.redirectIfInvalid();
        if (this.dataService.quantities.length === 0) {
            this.fetchData();
        }
    }
    fetchData() {
        this.dataService.getItems().subscribe((res) => {
            res.forEach((item) => {
                this.dataService.quantities.push(new _models_item_ItemQuantity__WEBPACK_IMPORTED_MODULE_2__["ItemQuantity"](item, 0));
            });
        });
    }
    goToCart() {
        this.router.navigateByUrl('/checkout');
    }
};
ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: __webpack_require__(/*! raw-loader!./items.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/items/items.component.html"),
        styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/components/items/items.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"]])
], ItemsComponent);



/***/ }),

/***/ "./src/app/components/layout/nav-bar/nav-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/layout/nav-bar/nav-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout{\r\n  float: right;\r\n}\r\n.links{\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ291dHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmxpbmtze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/nav-bar/nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavBarComponent = class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        sessionStorage.clear();
        this.router.navigateByUrl('');
    }
    goToHome() {
        this.router.navigateByUrl('shop');
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/layout/nav-bar/nav-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.loginForm {*/\r\n  /*margin: 0 auto;*/\r\n  /*position: absolute;*/\r\n  /*width: 20%;*/\r\n  /*height: 30%;*/\r\n  /*left: 45%;*/\r\n  /*top: 35%;*/\r\n  /*}*/\r\n  /*---------------------------------------------*/\r\n  :root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n  body  {\r\n\r\n  min-height: 657px;\r\n  background: #007bff;\r\n\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n  input{\r\n  line-height: 40px;\r\n  border-radius: 0.5rem;\r\n}\r\n  .card-signin {\r\n  border: 0;\r\n  border-radius: 3rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n  .card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n  .card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n  .form-signin {\r\n  width: 100%;\r\n}\r\n  .form-signin .btn {\r\n  font-size: 90%;\r\n  border-radius: 3rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n  /* Fallback for Edge\r\n-------------------------------------------------- */\r\n  @supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n  /* Fallback for IE\r\n-------------------------------------------------- */\r\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n  .warning {\r\n  background: #fc2d7f;\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDZCxJQUFJO0VBR0osZ0RBQWdEO0VBR2hEO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtFQUNBOztFQUVFLGlCQUFpQjtFQUNqQixtQkFBbUI7O0VBRW5CLHVEQUF1RDtBQUN6RDtFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtFQUlBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7RUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0VBRUE7RUFDRSxhQUFhO0FBQ2Y7RUFFQTtFQUNFLFdBQVc7QUFDYjtFQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7RUFXQTtvREFDb0Q7RUFFcEQ7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7RUFFQTtvREFDb0Q7RUFFcEQ7RUFFRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7RUFHQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubG9naW5Gb3JtIHsqL1xyXG4gIC8qbWFyZ2luOiAwIGF1dG87Ki9cclxuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4gIC8qd2lkdGg6IDIwJTsqL1xyXG4gIC8qaGVpZ2h0OiAzMCU7Ki9cclxuICAvKmxlZnQ6IDQ1JTsqL1xyXG4gIC8qdG9wOiAzNSU7Ki9cclxuLyp9Ki9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuOnJvb3Qge1xyXG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxufVxyXG5ib2R5ICB7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDY1N3B4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XHJcbn1cclxuaW5wdXR7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogRmFsbGJhY2sgZm9yIEVkZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGYWxsYmFjayBmb3IgSUVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXHJcbigtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi53YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjZmMyZDdmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_userdata_UserData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/userdata/UserData */ "./src/app/models/userdata/UserData.ts");
/* harmony import */ var _Services_data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/data-service.service */ "./src/app/Services/data-service.service.ts");






let LoginComponent = class LoginComponent {
    constructor(router, http, dataService) {
        this.router = router;
        this.http = http;
        this.dataService = dataService;
        this.userData = new _models_userdata_UserData__WEBPACK_IMPORTED_MODULE_4__["UserData"]();
        this.verified = true;
    }
    ngOnInit() {
        if (sessionStorage.length > 0) {
            this.router.navigateByUrl('shop');
        }
    }
    validateAndLogin() {
        const url = 'http://localhost:8080/validate';
        this.http.post(url, this.userData).subscribe(res => {
            if (null !== res && res === true) {
                console.log('success');
                this.router.navigateByUrl('/shop');
                sessionStorage.setItem('user', this.userData.username);
                this.dataService.userName = this.userData.username;
            }
            else if (null !== res) {
                this.verified = false;
            }
        });
    }
    goToRegister() {
        this.router.navigateByUrl('/register');
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _Services_data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataServiceService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/quantity-selector/quantity-selector.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/quantity-selector/quantity-selector.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.inc {*/\r\n  /*background-color: #4CAF50; !* Green *!*/\r\n  /*border: none;*/\r\n  /*color: white;*/\r\n  /*text-align: center;*/\r\n  /*text-decoration: none;*/\r\n  /*display: inline-block;*/\r\n  /*font-size: 16px;*/\r\n  /*}*/\r\n  /*.dec {*/\r\n  /*background-color: Red; !* Green *!*/\r\n  /*border: none;*/\r\n  /*color: white;*/\r\n  /*text-align: center;*/\r\n  /*text-decoration: none;*/\r\n  /*display: inline-block;*/\r\n  /*font-size: 16px;*/\r\n  /*}*/\r\n  /*td {*/\r\n  /*width: 150px;*/\r\n  /*height: 50px;*/\r\n  /*}*/\r\n  button {\r\n  margin: auto;\r\n  }\r\n  div {\r\n  margin:auto;\r\n}\r\n  .item{\r\n  width:30%;\r\n\r\n}\r\n  .quantity{\r\n  width: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWFudGl0eS1zZWxlY3Rvci9xdWFudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7RUFDUCx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDckIsSUFBSTtFQUNKLFNBQVM7RUFDUCxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUVoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDckIsSUFBSTtFQUdKLE9BQU87RUFDTCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBRWxCLElBQUk7RUFFSjtFQUNFLFlBQVk7RUFDWjtFQUVGO0VBQ0UsV0FBVztBQUNiO0VBRUE7RUFDRSxTQUFTOztBQUVYO0VBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1YW50aXR5LXNlbGVjdG9yL3F1YW50aXR5LXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5pbmMgeyovXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAhKiBHcmVlbiAqISovXHJcbiAgLypib3JkZXI6IG5vbmU7Ki9cclxuICAvKmNvbG9yOiB3aGl0ZTsqL1xyXG5cclxuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4gIC8qdGV4dC1kZWNvcmF0aW9uOiBub25lOyovXHJcbiAgLypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cclxuICAvKmZvbnQtc2l6ZTogMTZweDsqL1xyXG4vKn0qL1xyXG4vKi5kZWMgeyovXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBSZWQ7ICEqIEdyZWVuICohKi9cclxuICAvKmJvcmRlcjogbm9uZTsqL1xyXG4gIC8qY29sb3I6IHdoaXRlOyovXHJcblxyXG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgLyp0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIC8qZm9udC1zaXplOiAxNnB4OyovXHJcbi8qfSovXHJcblxyXG5cclxuLyp0ZCB7Ki9cclxuICAvKndpZHRoOiAxNTBweDsqL1xyXG4gIC8qaGVpZ2h0OiA1MHB4OyovXHJcblxyXG4vKn0qL1xyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuZGl2IHtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLml0ZW17XHJcbiAgd2lkdGg6MzAlO1xyXG5cclxufVxyXG4ucXVhbnRpdHl7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/quantity-selector/quantity-selector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/quantity-selector/quantity-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuantitySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitySelectorComponent", function() { return QuantitySelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_item_ItemQuantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/item/ItemQuantity */ "./src/app/models/item/ItemQuantity.ts");



let QuantitySelectorComponent = class QuantitySelectorComponent {
    constructor() { }
    ngOnInit() {
    }
    onIncrease() {
        this.itemQuantity.quantity = this.itemQuantity.quantity + 1;
        // console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
        //   + ' |Quantity: ' + this.itemQuantity.quantity);
    }
    onDecrease() {
        if (this.itemQuantity.quantity !== 0) {
            this.itemQuantity.quantity = this.itemQuantity.quantity - 1;
        }
        console.log('Name: ' + this.itemQuantity.item.name + '| Price: ' + this.itemQuantity.item.price
            + ' |Quantity: ' + this.itemQuantity.quantity);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_item_ItemQuantity__WEBPACK_IMPORTED_MODULE_2__["ItemQuantity"])
], QuantitySelectorComponent.prototype, "itemQuantity", void 0);
QuantitySelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quantity-selector',
        template: __webpack_require__(/*! raw-loader!./quantity-selector.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/quantity-selector/quantity-selector.component.html"),
        styles: [__webpack_require__(/*! ./quantity-selector.component.css */ "./src/app/components/quantity-selector/quantity-selector.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuantitySelectorComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\ninput{\r\n  line-height: 40px;\r\n  border-radius: 0.5rem;\r\n}\r\nbody  {\r\n  min-height: 800px;\r\n  background: #007bff;\r\n  background: linear-gradient(to right, #00cb28, #94ff97);\r\n}\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 3rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n.form-signin .btn {\r\n  font-size: 90%;\r\n  border-radius: 3rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n.warning {\r\n  background: #fc2d7f;\r\n  color: white;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1REFBdUQ7QUFDekQ7QUFJQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOENBQThDO0FBQ2hEO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBV0E7b0RBQ29EO0FBRXBEO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7b0RBQ29EO0FBRXBEO0VBRUU7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbn1cclxuaW5wdXR7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcbmJvZHkgIHtcclxuICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwY2IyOCwgIzk0ZmY5Nyk7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtc2lnbmluIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICBmb250LXNpemU6IDkwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBJRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSxcclxuKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogI2ZjMmQ3ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_userdata_UserData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/userdata/UserData */ "./src/app/models/userdata/UserData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.validPhone = true;
        this.validName = true;
        this.validEmail = true;
        this.validUserName = true;
        this.validPassword = true;
        this.validConfirmPass = true;
        this.verified = false;
        this.existingUser = false;
        this.userData = new _models_userdata_UserData__WEBPACK_IMPORTED_MODULE_2__["UserData"]();
    }
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
    validateName() {
        if (!this.userData.name.match('^[a-zA-Z]+(\\s[a-zA-Z]+)*$')) {
            return false;
        }
        return true;
    }
    validateEmail() {
        if (!this.userData.email.match('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')) {
            return false;
        }
        return true;
    }
    validatePhone() {
        if (!this.userData.phone.match('^[0-9]\\d{9}$')) {
            return false;
        }
        return true;
    }
    validatePassword() {
        if (!this.userData.password.match('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$')) {
            return false;
        }
        return true;
    }
    validateConfirmPassword() {
        if (this.confirmPassword !== this.userData.password) {
            return false;
        }
        return true;
    }
    validateUserName() {
        if (!this.userData.username.match('^([a-zA-Z0-9])*$')) {
            return false;
        }
        return true;
    }
    userNameAvailability() {
        const url = 'http://localhost:8080/availability';
        this.http.post(url, this.userData.username).subscribe(res => {
            this.existingUser = res;
            console.log('inside: ' + this.existingUser);
            this.acceptRejectData();
        });
    }
    acceptRejectData() {
        this.verified = this.validName && this.validEmail && this.validPhone &&
            this.validPassword && this.validUserName && this.validConfirmPass && !this.existingUser;
        if (this.verified) {
            // After validation
            this.http.post('http://localhost:8080/post', this.userData).subscribe(res => {
                console.log('Added to database: ' + res);
            }, err => {
                console.log('Error: ' + err);
            });
        }
    }
    goToLogin() {
        this.router.navigateByUrl('');
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/upi/upi.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/upi/upi.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title{\r\n  margin-bottom: 40px;\r\n}\r\nbody  {\r\n  min-height: 657px;\r\n  background: #007bff;\r\n\r\n  background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGkvdXBpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7O0VBRW5CLHVEQUF1RDtBQUN6RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBpL3VwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5ib2R5ICB7XHJcbiAgbWluLWhlaWdodDogNjU3cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/upi/upi.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/upi/upi.component.ts ***!
  \*************************************************/
/*! exports provided: UPIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPIComponent", function() { return UPIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/data-service.service */ "./src/app/Services/data-service.service.ts");



let UPIComponent = class UPIComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.redirectIfInvalid();
    }
    validateVPAAndPay() {
        this.successMsg = true;
    }
};
UPIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upi',
        template: __webpack_require__(/*! raw-loader!./upi.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upi/upi.component.html"),
        styles: [__webpack_require__(/*! ./upi.component.css */ "./src/app/components/upi/upi.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"]])
], UPIComponent);



/***/ }),

/***/ "./src/app/models/item/ItemQuantity.ts":
/*!*********************************************!*\
  !*** ./src/app/models/item/ItemQuantity.ts ***!
  \*********************************************/
/*! exports provided: ItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemQuantity", function() { return ItemQuantity; });
class ItemQuantity {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
}


/***/ }),

/***/ "./src/app/models/userdata/UserData.ts":
/*!*********************************************!*\
  !*** ./src/app/models/userdata/UserData.ts ***!
  \*********************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
class UserData {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nsadasiv\Projects\Shopping\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map