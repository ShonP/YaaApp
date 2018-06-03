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
  quality = ['quality/1.jpg', 'quality/2.jpg', 'quality/3.jpg','quality/4.jpg','quality/5.jpg','quality/6.jpg','quality/7.jpg','quality/8.jpg','quality/9.jpg'];
  secure = ['secure/1.jpg', 'secure/2.jpg', 'secure/3.jpg','secure/4.jpg','secure/5.jpg','secure/6.jpg','secure/7.jpg','secure/8.jpg','secure/9.jpg','secure/10.jpg'];
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
