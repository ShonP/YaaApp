import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, AlertController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FCM } from '@ionic-native/fcm';
import { LoginPage } from '../pages/login/login';
import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers/app.reducers';
import { HomePage } from '../pages/home/home';
import { UnitDetailsPage } from '../pages/unit-details/unit-details';
import { NotebookPage } from '../pages/notebook/notebook';
import { PhonebookPage } from '../pages/phonebook/phonebook';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  loading = false;
  pages: Array<{ title: string; component: any }>;
  ngOnInit() {
    this._store.select('auth').subscribe(res => {
      if (res.user && res.authenticated) {
        this.rootPage = UnitDetailsPage;
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
  fcmThings() {
    if (this.platform.is('android')) {
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          this.alrt
            .create({
              message: data.message
            })
            .present();
        } else {
          this.alrt
            .create({
              message: data.message
            })
            .present();
        }
      });
    }
  }
  constructor(
    private alrt: AlertController,
    private fcm: FCM,
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _store: Store<AppState>
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { title: 'על היחידה', component: UnitDetailsPage },
        { title: 'פק"ל כיסים', component: NotebookPage },
        { title: 'ספר טלפונים', component: PhonebookPage },
        { title: 'נכס לאומי', component: HomePage }
      ];
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
