import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { SearchPage } from '../search/search';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/shared/reducers/app.reducers';
import * as GroupActions from '../../app/shared/reducers/group/group.actions';
import { GroupDetailsPage } from '../group-details/group-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private _store: Store<AppState>
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
