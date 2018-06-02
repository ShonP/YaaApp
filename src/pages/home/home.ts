import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { SearchPage } from '../search/search';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/shared/reducers/app.reducers';
import * as GroupActions from '../../app/shared/reducers/group/group.actions';
import { GroupDetailsPage } from '../group-details/group-details';
import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private _store: Store<AppState>,
    private fcm: FCM
  ) {}
  currentUser: any = null;
  groups = [];
  ngOnInit() {
    this._store.select('auth').subscribe(res => {
      this._store.dispatch(new GroupActions.FetchGroups(res.user._id));
      this.currentUser = res.user;
    });
    this._store.select('group').subscribe(res => {
      this.groups = res.userGroups;
      if (this.groups.length > 0 && this.platform.is('android')) {
        this.groups.forEach(ele => {
          this.fcm.subscribeToTopic(ele._id);
        });
      }
    });
  }
  EnterGroup(group) {
    this._store.dispatch(new GroupActions.FetchGroup(group._id));
    this.navCtrl.push(
      GroupDetailsPage,
      {},
      { animate: true, direction: 'back' }
    );
  }
  presentModal() {
    let modal = this.modalCtrl.create(CreateGroupPage);
    modal.present();
  }
  presentSearch() {
    let modal = this.modalCtrl.create(SearchPage, { user: this.currentUser });
    modal.present();
  }
}
