import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { NotebookNewsoldierPage } from '../notebook-newsoldier/notebook-newsoldier';

/**
 * Generated class for the NotebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notebook',
  templateUrl: 'notebook.html'
})
export class NotebookPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _modalCtr: ModalController
  ) {}
  openNewSoldier() {
    let modal = this._modalCtr.create(NotebookNewsoldierPage);
    modal.present();
  }
}
