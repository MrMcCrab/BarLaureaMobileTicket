import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

 export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
 }

@IonicPage({name: 'MenuPage'})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'About', pageName: 'TabsPage', tabComponent: 'LoggedinPage', index: 0, icon: 'contact'},
    { title: 'CV', pageName: 'TabsPage', tabComponent: 'CvPage', index: 1, icon: 'list-box'},
    { title: 'Hobbies', pageName: 'TabsPage', tabComponent: 'HobbiesPage', index: 2, icon: 'game-controller-b'},
    { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 3, icon: 'mail'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params ={};

    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
