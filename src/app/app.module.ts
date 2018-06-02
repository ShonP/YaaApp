import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './shared/reducers/auth';
import { GroupEffects } from './shared/reducers/group/group.effects';
import { reducers, HttpService } from './shared/';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { FCM } from '@ionic-native/fcm';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { GroupDetailsPage } from '../pages/group-details/group-details';
import { SearchPage } from '../pages/search/search';
import { RequestsPage } from '../pages/requests/requests';
import { CreateGroupPage } from '../pages/create-group/create-group';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UnitDetailsPage } from '../pages/unit-details/unit-details';
import { NotebookPage } from '../pages/notebook/notebook';
import { NotebookNewsoldierPage } from '../pages/notebook-newsoldier/notebook-newsoldier';
import { PhonebookPage } from '../pages/phonebook/phonebook';
import { CallNumber } from '@ionic-native/call-number';
import { GalleryPage } from '../pages/gallery/gallery';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CreateGroupPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GroupDetailsPage,
    SearchPage,
    RequestsPage,
    UnitDetailsPage,
    NotebookPage,
    NotebookNewsoldierPage,
    PhonebookPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp, { backButtonText: 'חזור' }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, GroupEffects]),
    true ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateGroupPage,
    GroupDetailsPage,
    SearchPage,
    RequestsPage,
    UnitDetailsPage,
    NotebookPage,
    NotebookNewsoldierPage,
    PhonebookPage,
    GalleryPage
  ],
  providers: [
    FCM,
    CallNumber,
    HttpService,
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
