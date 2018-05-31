import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/shared/reducers/app.reducers';
import * as groupActions from '../../app/shared/reducers/group/group.actions';
/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html'
})
export class CreateGroupPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private _store: Store<AppState>
  ) {}
  upperGroupId = null;
  ngOnInit() {
    this._store.select('auth').subscribe(res => {
      this.currentUser = res.user;
    });
    this.upperGroupId = this.navParams.get('groupId');
  }
  currentUser = '';
  nameofGroup = '';
  dismiss() {
    this.viewCtrl.dismiss();
  }
  createGroup() {
    this._store.dispatch(
      new groupActions.CreateGroup({
        name: this.nameofGroup,
        user: this.currentUser,
        upperGroup: this.upperGroupId
      })
    );
    this.viewCtrl.dismiss();
  }
}
