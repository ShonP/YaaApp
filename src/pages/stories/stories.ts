import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'stories.html'
})
export class StoriesPage {
  constructor(public navCtrl: NavController) {}
  dismiss() {
    this.navCtrl.pop();
  }
}
