import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { InfoPage } from '../info/info';
import viewed from '../display';
import { StroryPage } from '../strory/strory';
import { SportsPage } from '../sports/sports';
import { TectnologyPage } from '../tectnology/tectnology';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

 src ="C:\Users\thando\Desktop\apiStart\src\assets\imgs\news.jpg";
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
  slide = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rssprovider: DatabaseProvider,public alertCtrl: AlertController,public modalCtrl: ModalController) {

    this.rssprovider.getNews().subscribe((data:any)=>{
      console.log(data);
      //this.title=data.articles[0].title ;
      for(var i = 0 ;i < 10 ; i++){
        this.arr.push(data.articles[i]);
      }
      })

      
  }

  showF(){
    this.show = true;
  }
  hideF(){
    this.show = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  view(i){

    this.rssprovider.getNews().subscribe((data:any)=>{
      viewed[0] = (data.articles[i]);
      // this.navCtrl.push(InfoPage);
      let me = this.modalCtrl.create(InfoPage);
    me.present();
      })
  };

  
  pop()
   {
    const prompt = this.alertCtrl.create({
      title: 'Other categories',
      message: "Choose below",
      buttons: [
        {
          text: 'Sports',
          // type:'button',
          handler: data => {
            console.log('Sports clicked');
            let me = this.modalCtrl.create(SportsPage);
            me.present();
            // this.navCtrl.push(SportsPage);
          }
        },
        {
          text: 'Technology',
          handler: data => {
            console.log('Technology clicked');
            let me = this.modalCtrl.create(TectnologyPage);
                  me.present();
          }
        },
        {
          text: 'National Geographic',
          handler: data => {
            console.log('National Geographic clicked');
            let me = this.modalCtrl.create(StroryPage);
                  me.present();
          }
        }
      ]
    });
    prompt.present();
  };
  
}
