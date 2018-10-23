import { Component } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController,public provider: DatabaseProvider,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {

  
  }

ionViewWillLoad(){
  setTimeout(() => {
    
   let me = this.modalCtrl.create(NewsPage);
    me.present();
  }, 5000);
}
}
