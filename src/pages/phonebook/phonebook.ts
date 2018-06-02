import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the PhonebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phonebook',
  templateUrl: 'phonebook.html'
})
export class PhonebookPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _alrtCtrl: AlertController,
    private _callNum: CallNumber
  ) {}
  phones = [
    {
      title: 'משרד רישום',
      mat: '0308-4615',
      civ: '08-868-4615',
      actual: '088684615'
    },
    {
      title: 'משרד תכנון',
      mat: '0308-5055',
      civ: '08-868-5055',
      actual: '088685055'
    },
    {
      title: 'משרד ניהול',
      mat: '0308-4594',
      civ: '08-868-4594',
      actual: '088684594'
    },
    {
      title: 'משרד ת"ש',
      mat: '0308-4178',
      civ: '08-868-4178',
      actual: '088684178'
    },
    {
      title: 'רס"ר היחידה',
      mat: '0308-5933',
      civ: '08-8685933',
      actual: '088685933'
    },
    {
      title: 'משרד חינוך ויח"צ',
      mat: '0308-5042',
      civ: '08-8685042',
      actual: '088685042'
    },
    {
      title: 'אבטחת מידע (בח"א 8)',
      mat: '0308-5177',
      civ: '08-8685177',
      actual: '088685177'
    },
    {
      title: 'מספרה (בח"א 8)',
      mat: '0308-5327',
      civ: '08-8685327',
      actual: '088685327'
    },
    {
      title: 'בנק ודואר (בח"א 8)',
      mat: '0308-4611',
      civ: '08-8684611',
      actual: '088684611'
    },
    {
      title: 'מרפאה (בח"א 8)',
      mat: '0308-4466',
      civ: '08-8684466',
      actual: '088684466'
    },
    {
      title: 'מרפאת שיניים (בח"א 8)',
      mat: '0308-4142',
      civ: '08-8684142',
      actual: '088684142'
    },
    {
      title: 'קצין פסיכולוגיה (בח"א 8)',
      mat: '0308-4348',
      civ: '08-8684348',
      actual: '088684348'
    },
    {
      title: 'נשקייה (בח"א 8)',
      mat: '0308-4706',
      civ: '08-8684706',
      actual: '088684706'
    },
    {
      title: 'בית הכנסת (בח"א 8)',
      mat: '0308-5907',
      civ: '08-8685907',
      actual: '088685907'
    },
    {
      title: 'מד"סיה (בח"א 8)',
      mat: '0308-4630',
      civ: '08-8684630',
      actual: '088684630'
    }
  ];
  dial(phone) {
    this._callNum
      .callNumber(phone, true)
      .then(res => {})
      .catch(err => {
        this._alrtCtrl
          .create({
            title: 'לא ניתן להתקשר דרך האפליקציה',
            buttons: [
              {
                text: 'אישור',
                handler: () => {}
              }
            ]
          })
          .present();
      });
  }
}
