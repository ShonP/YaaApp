import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-unit-gallery',
  templateUrl: 'unit-gallery.html'
})
export class UnitGalleryPage implements OnInit {
  images = [];
  name: string = '';
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  ngOnInit() {
    this.images = [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      'yaa1.jpg',
      'yaa2.jpg',
      'yaa3.jpg',
      '4.png',
      '5.png',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.png',
      '11.jpg',
      '12.png',
      '13.jpg'
    ];
    this.name = 'גלריה';
  }
  dismiss() {
    this.navCtrl.pop();
  }
}
