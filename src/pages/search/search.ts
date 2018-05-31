import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController
} from 'ionic-angular';
import { HttpService } from '../../app/shared/services/http.service';
import { controllers } from '../../app/shared/models/api/controllers';
import { functions } from '../../app/shared/models/api/functions';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage implements OnInit {
  search: string = '';
  groupsFound: any = [];
  currentUser: any = null;
  constructor(
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _httpService: HttpService
  ) {}
  ngOnInit() {
    this.currentUser = this.navParams.get('user');
    console.log(this.currentUser);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  onChange(event) {
    if (event.length > 2) {
      this.searchGroups(event);
    }
  }
  searchGroups(name) {
    this._httpService
      .get(controllers.national, functions.findGroups, [name])
      .subscribe(
        res => {
          this.groupsFound = res;
        },
        err => {
          console.log(err);
        }
      );
  }
  joinGroup(groupId) {
    this._httpService
      .post(controllers.national, functions.joinGroup, {
        groupId: groupId,
        userId: this.currentUser._id
      })
      .subscribe(
        res => {
          this.alertCtrl
            .create({
              title: 'בקשתך נשלחה',
              subTitle: 'בקש ממנהל הקבוצה לאשר אותך',
              buttons: ['אישור']
            })
            .present();
          this.viewCtrl.dismiss();
        },
        err => {
          this.alertCtrl
            .create({
              title: 'שגיאה',
              subTitle: 'קרתה שגיאה במהלך הבקשה',
              buttons: ['אישור']
            })
            .present();
        }
      );
  }
}
