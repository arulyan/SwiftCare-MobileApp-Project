import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-details',
  templateUrl: 'history-details.html',
})
export class HistoryDetailsPage {

  history:any;
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  docInfo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataProvider) {
    this.history = this.navParams.get('details');
    console.log(this.history);
    this.getDocInfor();
  }

  getDocInfor() {
    console.log("history:"+this.history.docname);
    let body = {
      docName: this.history.docname,
    }
    this.ds.getDocInfo(body).subscribe( data => {
      this.docInfo = data.json()[0].image;
      console.log(data.json()[0]);
    })
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad HistoryDetailsPage');
  }

}
