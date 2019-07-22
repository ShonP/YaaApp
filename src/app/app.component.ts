import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Platform,
  AlertController,
  Nav,
  ModalController,
  NavController
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FCM } from '@ionic-native/fcm';
import { LoginPage } from '../pages/login/login';
import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers/app.reducers';
import { HomePage } from '../pages/home/home';
import { UnitDetailsPage } from '../pages/unit-details/unit-details';
import { NotebookPage } from '../pages/notebook/notebook';
import { NotebookNewsoldierPage } from '../pages/notebook-newsoldier/notebook-newsoldier';
import { PhonebookPage } from '../pages/phonebook/phonebook';
import { GalleryPage } from '../pages/gallery/gallery';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  loading = false;
  pages: Array<{ icon?: string; title: string; component: any }>;

  constructor(
    private alrt: AlertController,
    // private fcm: FCM,
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _store: Store<AppState>,
    private modalCtrl: ModalController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        {
          icon: 'home',
          title: 'דף הבית',
          component: HomePage
        },
        {
          icon: 'information-circle',
          title: 'על היחידה',
          component: UnitDetailsPage
        },
        { icon: 'call', title: 'ספר טלפונים', component: PhonebookPage }
      ];
    });
  }

  ngOnInit() {
    this.rootPage = HomePage;
    if (window.location.hash === '#/new-soldier') {
      let modal = this.modalCtrl.create(NotebookNewsoldierPage);
      modal.present();
    }
    this._store.select('loading').subscribe(res => {
      if (res.Loading.length > 0) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
  }
  // fcmThings() {
  //   if (this.platform.is('android')) {
  //     this.fcm.onNotification().subscribe(data => {
  //       if (data.wasTapped) {
  //         this.alrt
  //           .create({
  //             message: data.message
  //           })
  //           .present();
  //       } else {
  //         this.alrt
  //           .create({
  //             message: data.message
  //           })
  //           .present();
  //       }
  //     });
  //   }
  // }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  quality = [
    'quality/1.jpg',
    'quality/2.jpg',
    'quality/3.jpg',
    'quality/4.jpg',
    'quality/5.jpg',
    'quality/6.jpg',
    'quality/7.jpg',
    'quality/8.jpg',
    'quality/9.jpg'
  ];
  secure = [
    'secure/1.jpg',
    'secure/2.jpg',
    'secure/3.jpg',
    'secure/4.jpg',
    'secure/5.jpg',
    'secure/6.jpg',
    'secure/7.jpg',
    'secure/8.jpg',
    'secure/9.jpg',
    'secure/10.jpg'
  ];

  openNewSoldier() {
    let modal = this.modalCtrl.create(NotebookNewsoldierPage);
    modal.present();
  }
  openSecure() {
    this.nav.push(GalleryPage, {
      images: this.secure,
      name: 'פנקס בטחון'
    });
  }
  openQuality() {
    let modal = this.nav.push(GalleryPage, {
      images: this.quality,
      name: 'פנקס איכות'
    });
  }
}
