import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/**
 * Generated class for the NotebookNewsoldierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notebook-newsoldier',
  templateUrl: 'notebook-newsoldier.html'
})
export class NotebookNewsoldierPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
