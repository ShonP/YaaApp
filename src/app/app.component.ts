import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers/app.reducers';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = LoginPage;
  loading = false;
  ngOnInit() {
    this._store.select('auth').subscribe(res => {
      if (res.user && res.authenticated) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
    this._store.select('loading').subscribe(res => {
      if (res.Loading.length > 0) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
  }
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _store: Store<AppState>
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
