import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
  IonicPage
} from 'ionic-angular';

import { Store } from '@ngrx/store';
import { AppState } from '../../app/shared';
import * as authActions from '../../app/shared/reducers/auth/auth.actions';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  logreg = true;
  loading: Loading;
  loginCredentials = { userName: 'ShonP', password: '135792' };
  registerCredentials = {
    userName: '',
    firstName: '',
    lastName: '',
    password: ''
  };
  authenticated = false;
  error = '';
  constructor(
    private nav: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private store: Store<AppState>
  ) {}
  ngOnInit() {
    this.store.select('auth').subscribe(res => {
      this.error = res.error;
    });
  }
  login() {
    this.store.dispatch(new authActions.Signin(this.loginCredentials));
  }
  register() {
    this.store.dispatch(new authActions.Signup(this.registerCredentials));
  }
  createAccount() {
    this.logreg = !this.logreg;
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  registerValidation() {
    const {
      userName,
      firstName,
      password,
      lastName
    } = this.registerCredentials;
    const regex = new RegExp(/^[A-Za-z][A-Za-z0-9]*$/);
    if (!regex.test(userName))
      return 'שם משתמש חייב להכיל רק אותיות באנגלית או ספרות';
    if (userName.length < 4) return 'שם משתמש חייב להיות לפחות 4 אותיות וספרות';
    if (userName.length > 10)
      return 'שם משתמש חייבת להיות מקסימום 10 אותיות וספרות';
    if (password.length < 6) return 'סיסמא חייב להיות לפחות 6 מספרים או אותיות';
    if (password.length > 12)
      return 'סיסמא חייבת להיות מקסימום 12 מספרים או אותיות';
    if (firstName.length < 1) return 'שם פרטי הינו שדה חובה';
    if (lastName.length < 1) return 'שם משפחה הינו שדה חובה';
    return true;
  }
}
