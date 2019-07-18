import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { RouterModule} from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
  MatRadioModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UPIComponent } from './components/upi/upi.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    QuantitySelectorComponent,
    CheckoutComponent,
    UPIComponent,
    CreditCardComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'payment/upi', component: UPIComponent},
      {path: 'payment/creditCard', component: CreditCardComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'shop', component: ItemsComponent}
      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
