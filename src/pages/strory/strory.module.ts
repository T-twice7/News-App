import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StroryPage } from './strory';

@NgModule({
  declarations: [
    StroryPage,
  ],
  imports: [
    IonicPageModule.forChild(StroryPage),
  ],
})
export class StroryPageModule {}
