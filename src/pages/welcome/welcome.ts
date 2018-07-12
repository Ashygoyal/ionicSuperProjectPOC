import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  sendToWhatsapp() {
      window['plugins'].socialsharing.canShareVia('whatsapp', 'msg', null, null, null, function(e){alert(e)}, function(e){alert(e)});
      window['plugins'].socialsharing.shareViaWhatsAppToPhone ('+917676343714', 'Message via WhatsApp', 'https://www.google.nl/images/srpr/logo4w.png' /* img */, null /* url */, 
      function() {console.log('share ok')}
      );

  }

  justShare(){
    //window['plugins'].socialsharing.share('Message only');
    
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
}
