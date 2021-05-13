import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BaseService } from '../Services/base-service';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GetUserDetailsService } from '../Services/getUserDetails';
import { ShowUserDetailsPage } from '../pages/show-user-details/show-user-details';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowUserDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowUserDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BaseService,
    GetUserDetailsService,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
