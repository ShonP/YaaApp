import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { HttpService } from '../../app/shared/services/http.service';
import { controllers } from '../../app/shared/models/api/controllers';
import { functions } from '../../app/shared/models/api/functions';
/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html'
})
export class RequestsPage implements OnInit {
  group: any = null;
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _httpService: HttpService
  ) {}
  ngOnInit() {
    this.group = this.navParams.get('group');
  }
  respond(request, response) {
    this._httpService
      .post(controllers.national, functions.respondRequest, {
        groupId: this.group._id,
        userId: request._id,
        response: response
      })
      .subscribe(
        res => {
          this.group.requests = res;
        },
        err => {
          console.log(err);
        }
      );
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
