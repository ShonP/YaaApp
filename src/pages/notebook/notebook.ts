import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { NotebookNewsoldierPage } from '../notebook-newsoldier/notebook-newsoldier';
import { GalleryPage } from '../gallery/gallery';
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
  quality = ['22old.png', '22old.png', '22old.png'];
  secure = ['22old.png', '22old.png', '22old.png'];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _modalCtr: ModalController
  ) {}
  openNewSoldier() {
    let modal = this._modalCtr.create(NotebookNewsoldierPage);
    modal.present();
  }
  openSecure() {
    let modal = this._modalCtr.create(GalleryPage, {
      images: this.secure,
      name: 'פנקס בטחון'
    });
    modal.present();
  }
  openQuality() {
    let modal = this._modalCtr.create(GalleryPage, {
      images: this.quality,
      name: 'פנקס איכות'
    });
    modal.present();
  }
}
