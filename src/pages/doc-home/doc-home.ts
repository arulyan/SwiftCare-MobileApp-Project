import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-home',
  templateUrl: 'doc-home.html',
})
export class DocHomePage {

  docName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.docName = this.navParams.get('docname');
  }

  Next(){
    this.navCtrl.push('DocAppointmentsPage');
  }

  toModificationPage(){
    this.navCtrl.push('SlotModificationPage',{docName:this.docName});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocHomePage');
  }

}
