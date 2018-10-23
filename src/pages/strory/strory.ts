import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { InfoPage } from '../info/info';
import viewed from '../display';
// import { StroryPage } from '../strory/strory';
import { SportsPage } from '../sports/sports';
import { TectnologyPage } from '../tectnology/tectnology';
import { NewsPage } from '../news/news';


/**
 * Generated class for the StroryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strory',
  templateUrl: 'strory.html',
})
export class StroryPage {

  src:string ="C:\Users\thando\Desktop\apiStart\src\assets\imgs\news.jpg";

  url: string;
  data: string;
 show = true;
  title ;
  image ;
  description ;
 slideIndex = 1;
  arr=[];
 
  naT=[];
  tech=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rssprovider: DatabaseProvider,public alertCtrl: AlertController,public modalCtrl: ModalController) {
    this.rssprovider.getNAT().subscribe((data:any)=>{
      console.log(data);
      //this.title=data.articles[0].title ;
      for(var i = 0 ;i < 10 ; i++){
        this.naT.push(data.articles[i]);
      }
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StroryPage');
  }


  viewN(i){
              this.rssprovider.getNAT().subscribe((data:any)=>{
                viewed[0] = (data.articles[i]);

                this.navCtrl.push(InfoPage);
              
             })
              } 

              home(){
                let me = this.modalCtrl.create(NewsPage);
              me.present();
              }
}
