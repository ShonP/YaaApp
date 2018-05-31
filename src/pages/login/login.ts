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
  loginCredentials = { userName: 'Shon', password: 'Shon' };
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
}
