import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewSlotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-slot',
  templateUrl: 'add-new-slot.html',
})
export class AddNewSlotPage {

  time:string;
  docName:string;
  weekday:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataProvider) {
    this.docName = this.navParams.get('docName');
    this.weekday = this.navParams.get('weekday');
    console.log("Add new slot page shows:"+this.docName+this.weekday);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewSlotPage');
  }

  AddSlot(time) {
    let body = {
      time:time,
      docName:this.docName,
      weekday:this.weekday
    }
    this.ds.addNewSlot(body).subscribe(res => {
      if(res.json().status == 200) {
        alert("The Slot has been added!");
        this.navCtrl.pop();
      }
      else {
        alert("Some Technical Issue!");
      }
    })
  }

}
