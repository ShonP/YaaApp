import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
} from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage implements OnInit {
  images = [];
  name: string = '';
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}
  ngOnInit() {
    this.images = this.navParams.get('images');
    this.name = this.navParams.get('name');
  }
  dismiss() {
    this.navCtrl.pop();
  }
}
