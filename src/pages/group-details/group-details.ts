import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  AlertController
} from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/shared/reducers/app.reducers';
import * as GroupActions from '../../app/shared/reducers/group/group.actions';
import { CreateGroupPage } from '../create-group/create-group';
import { RequestsPage } from '../requests/requests';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';
Chart.defaults.global.plugins.datalabels.anchor = 'end';
Chart.defaults.global.plugins.datalabels.align = 'end';
/**
 * Generated class for the GroupDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-group-details',
  templateUrl: 'group-details.html'
})
export class GroupDetailsPage implements OnInit, AfterViewInit {
  constructor(
    private alrtController: AlertController,
    private _store: Store<AppState>,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  group: any = {};
  currentReports = null;
  user = null;
  message = '';
  ngAfterViewInit() {}
  ngOnInit() {
    this._store.select('group').subscribe(res => {
      this.group = res.currentGroup;
      this.currentReports = res.currentReports;
      if (this.currentReports && this.group) {
        this.createDougnht();
      }
    });
    this._store
      .select('group')
      .select('currentGroup')
      .subscribe(res => {
        if (res !== null) {
          this._store.dispatch(new GroupActions.FetchGroupReports(res._id));
        }
      });
    this._store.select('auth').subscribe(res => {
      this.user = res.user;
    });
  }
  createDougnht() {
    let Reported = this.currentReports.reports.length;
    let NotReported =
      this.group.users.length - this.currentReports.reports.length;
    if (!this.doughnutCanvas) {
      return;
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['לא דיווחו', 'דיווחו'],
        datasets: [
          {
            label: '# of Votes',
            data: [NotReported, Reported],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
          }
        ]
      }
    });
  }
  report() {
    this._store.dispatch(
      new GroupActions.PostReport({
        nationalId: this.currentReports.nat._id,
        obj: {
          userId: this.user._id,
          message: this.message
        }
      })
    );
  }
  active() {
    let confirm = this.alrtController.create({
      title: 'האם אתה בטוח?',
      buttons: [
        {
          text: 'בטל',
          handler: () => {}
        },
        {
          text: 'אישור',
          handler: () => {
            this._store.dispatch(
              new GroupActions.ActiveNational(this.group._id)
            );
          }
        }
      ]
    });
    confirm.present();
  }
  makeAdmin(user) {
    if (this.isAdmin(user._id)) {
      return;
    }
    let confirm = this.alrtController.create({
      title: 'האם אתה בטוח?',
      message: `להפוך את ${user.firstName} למנהל?`,
      buttons: [
        {
          text: 'בטל',
          handler: () => {}
        },
        {
          text: 'אישור',
          handler: () => {
            this._store.dispatch(
              new GroupActions.MakeAdmin({
                userId: user._id,
                groupId: this.group._id
              })
            );
          }
        }
      ]
    });
    confirm.present();
  }
  back() {
    this._store.dispatch(new GroupActions.SetGroup(null));
    this._store.dispatch(new GroupActions.SetGroupReports(null));
    this.doughnutChart = null;
    this.navCtrl.pop({ animate: true, direction: 'forward' });
  }
  isAdmin(id) {
    const user = this.group.groupAdmins.find(x => x._id === id);
    if (user) {
      return true;
    }
    return false;
  }
  hasReport() {
    const userExist = this.group.users.find(x => x._id === this.user._id);
    if (!userExist) {
      return true;
    }
    const repExist = this.currentReports.reports.find(
      x => x.user._id === this.user._id
    );
    if (repExist) {
      return true;
    } else {
      return false;
    }
  }
  getTimeDiff(d1, d2) {
    const fd = new Date(d1);
    const sd = new Date(d2);
    const dif = Math.abs(fd.getTime() - sd.getTime());
    return Math.floor(dif / 1000 / 60);
  }
  presentModal() {
    let modal = this.modalCtrl.create(CreateGroupPage, {
      groupId: this.group._id
    });
    modal.present();
    modal.onDidDismiss(() => {
      setTimeout(() => {
        this._store.dispatch(new GroupActions.FetchGroup(this.group._id));
      }, 500);
    });
  }
  presentRequests() {
    let modal = this.modalCtrl.create(RequestsPage, {
      group: this.group,
      user: this.user
    });
    modal.present();
    modal.onDidDismiss(() => {
      setTimeout(() => {
        this._store.dispatch(new GroupActions.FetchGroup(this.group._id));
      }, 1000);
    });
  }
  changeGroup(id) {
    this._store.dispatch(new GroupActions.FetchGroup(id));
  }
}
