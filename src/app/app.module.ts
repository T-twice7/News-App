import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { InfoPage } from '../pages/info/info';
import { NewsPage } from '../pages/news/news';
import { StroryPage } from '../pages/strory/strory';
import { SportsPage } from '../pages/sports/sports';
import { TectnologyPage } from '../pages/tectnology/tectnology';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    NewsPage,
    StroryPage,
    SportsPage,
    TectnologyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    NewsPage,
    StroryPage,
    SportsPage,
    TectnologyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
