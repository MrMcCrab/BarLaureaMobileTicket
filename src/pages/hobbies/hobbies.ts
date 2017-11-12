import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-hobbies',
  templateUrl: 'hobbies.html',
})
export class HobbiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    if (firebaseProvider.currentUser == " "){
      this.navCtrl.setRoot('LoginPage');
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HobbiesPage');
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
