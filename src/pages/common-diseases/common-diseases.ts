import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';

/**
 * Generated class for the CommonDiseasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-common-diseases',
  templateUrl: 'common-diseases.html',
})
export class CommonDiseasesPage {

  info:any;
  diseases:any;

  constructor(public ds:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('getCat');
    console.log(this.info);
    let body = {
      nam:this.info
    }
    this.ds.postComDis(body).subscribe(data=>{
      this.diseases = data.json();
      console.log(data.json());
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonDiseasesPage');
  }

}
