import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-page1',
  templateUrl: 'my-page1.html',
})
export class MyPage1Page {

  username: string;
  password: string;
  repassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage1Page');
  }

  register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0){
      alert('You need to fill all fields');
    }
    else{
      alert('Got your password bish! -' + this.password);
    }
  }

}
