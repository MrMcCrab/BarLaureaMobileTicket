import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';

const firebaseAuth = {
    apiKey: "AIzaSyC5eqfMxC5h1taN0Z3CaHRjQuSIgY6pA8g",
    authDomain: "mobile-cv.firebaseapp.com",
    databaseURL: "https://mobile-cv.firebaseio.com",
    projectId: "mobile-cv",
    storageBucket: "",
    messagingSenderId: "814258891219"
  };

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireDatabase,
    AuthService
  ]
})
export class AppModule {}
