import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPage1Page } from './my-page1';

@NgModule({
  declarations: [
    MyPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(MyPage1Page),
  ],
})
export class MyPage1PageModule {}
