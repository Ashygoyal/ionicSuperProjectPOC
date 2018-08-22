import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MyPage1Page } from '../my-page1/my-page1';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  //public inputValue:string;
  usernameL: string;
  passwordL: string;
  textL: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  useCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
     }, (err) => {
      // Handle error
     });
  }

  result:any=[];
  data:Observable<any>;
  constructor(public navCtrl: NavController, public http: HttpClient, private camera: Camera) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  async loginMe(){ // onClick of Login button of Welcome Page
    console.log("Username is: "+ this.usernameL + " and " + "Password is: "+ this.passwordL); 
    if(this.usernameL.length !== 0 && this.passwordL.length !==0){
    var url="https://jsonplaceholder.typicode.com/posts/2";
    this.data = await this.http.get(url); // this is the asynchronous way
    // this.http.get(url).subscribe(data=> {  // this is the sync way to get data
    //   console.log(data);
    //   this.data = data;
    // });
    this.data.subscribe(data=> {
      console.log(data, this.result);
      this.result = data;
      console.log(this.result)
    });
    }
  else {
    alert('Fill both fields: Username and Password');
    }
  }

  registerMe(){
    this.navCtrl.push(MyPage1Page);
  }

  sendToWhatsapp() {
      window['plugins'].socialsharing.canShareVia('whatsapp', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)});
      window['plugins'].socialsharing.shareViaWhatsAppToPhone ('+917676343714', 'Message via WhatsApp', 'https://www.google.nl/images/srpr/logo4w.png' /* img */, null /* url */, 
      function() {console.log('share ok')}
      );
  }

  justShare(){
    window['plugins'].socialsharing.share('Message only');
    
  }

  smsFunction(){
    window['plugins'].socialsharing.shareViaSMS('My auto-generated sms', '+918310647737, +919620954300', function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
  }

  useInsta(){
    window['plugins'].socialsharing.shareViaInstagram('Message via Instagram', 'https://www.google.nl/images/srpr/logo4w.png', function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
  }

  useFB(){
    window['plugins'].socialsharing.shareViaFacebookWithPasteMessageHint('Message via Facebook', 'https://www.google.nl/images/srpr/logo4w.png' /* img */, null /* url */, 'Message copied to clipboard, Paste it in your status!', function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
  }

  toTwitter(){
    window['plugins'].socialsharing.shareViaTwitter('Message and link via Twitter', 'https://www.google.nl/images/srpr/logo4w.png' /* img */, 'http://www.x-services.nl')
  }

  demoFunction(){
    console.log('I am clicked');
  }

  usernameButton(){
    alert(this.textL);
  }

  tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 3000;

  // native cmer

}
