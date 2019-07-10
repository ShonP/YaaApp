import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnitDetailsPage } from '../unit-details/unit-details';
import { UnitGalleryPage } from '../unit-gallery/unit-gallery';
import { TimesPage } from '../times/times';
import { GalleryPage } from '../gallery/gallery';
import { StoriesPage } from '../stories/stories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  yaa70Years = new Date(2019, 6, 10, 18).getTime();
  wikiPage = UnitDetailsPage;
  thumimPage = UnitGalleryPage;
  timesPage = TimesPage;
  galleryPage = GalleryPage;
  storiesPage = StoriesPage;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  constructor(public navCtrl: NavController) {}
  ngOnInit() {
    // countdown
    setInterval(() => {
      // get today's date
      const today = new Date().getTime();

      // get the difference
      const diff = this.yaa70Years - today;

      // math
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
  }
}
