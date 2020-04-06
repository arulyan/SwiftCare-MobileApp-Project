import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the FirstScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-screen',
  templateUrl: 'first-screen.html',
})
export class FirstScreenPage {

  constructor(private menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstScreenPage');
  }

  signin()
  {
    this.navCtrl.push('SignUpPage');
  }
  login(){
    this.navCtrl.push('LoginPage');
  }
  docin(){
    this.navCtrl.push('DoctorLoginPage');
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

}
