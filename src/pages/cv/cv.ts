import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cv',
  templateUrl: 'cv.html',
})
export class CvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, public firebaseProvider: FirebaseProvider) {
    if (firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvPage');
  }

  public logout() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " ";
      //this.navCtrl.setRoot('LoginPage');
      document.location.href = 'index.html';
    }, function(error) {
      console.log("Error!")
    });
  }

}
