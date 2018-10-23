import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { InfoPage } from '../info/info';
import viewed from '../display';
import { StroryPage } from '../strory/strory';
// import { SportsPage } from '../sports/sports';
import { TectnologyPage } from '../tectnology/tectnology';
import { NewsPage } from '../news/news';


/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  src ="C:\Users\thando\Desktop\apiStart\src\assets\imgs\news.jpg";

  url: string;
  data: string;
//  show = true;
  title ;
  image ;
  description ;
 slideIndex = 1;
  spt=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rssprovider: DatabaseProvider,public alertCtrl: AlertController,public modalCtrl: ModalController) {
 
    this.rssprovider.getSPT().subscribe((data:any)=>{
      console.log(data);
      //this.title=data.articles[0].title ;
      for(var i = 0 ;i < 10 ; i++){
        this.spt.push(data.articles[i]);
      }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }


  viewS(i){
      this.rssprovider.getSPT().subscribe((data:any)=>{
        viewed[0] = (data.articles[i]);
        
        this.navCtrl.push(InfoPage);
     
        })
      };

      home(){
        let me = this.modalCtrl.create(NewsPage);
      me.present();
      };

}
