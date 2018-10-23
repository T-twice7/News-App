import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
// import { InfoPage } from '../info/info';
import viewed from '../display';
import { StroryPage } from '../strory/strory';
import { SportsPage } from '../sports/sports';
import { TectnologyPage } from '../tectnology/tectnology';
import { NewsPage } from '../news/news';


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  src ="C:\Users\thando\Desktop\apiStart\src\assets\imgs\city1.jpg";
  article = viewed;
  arr2=[];
  arr3=[];
  arr4=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rssprovider: DatabaseProvider,public alertCtrl: AlertController,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  home()
  {
  
  this.viewCtrl.dismiss(NewsPage);
  };
}
