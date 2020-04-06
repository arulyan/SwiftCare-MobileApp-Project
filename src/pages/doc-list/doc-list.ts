import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-list',
  templateUrl: 'doc-list.html',
})
export class DocListPage {

  specializ:string;
  docs:any;

  constructor(public ds:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.specializ = this.navParams.get('speciali');
    this.getDocs();
  }

  ionViewDidLoad() {
    console.log(this.specializ);
    console.log('ionViewDidLoad DocListPage');
    // this.getDocs();
  }
  ionWillViewEnter(){
  }

  getDocs(){
    let body = {
      speciali:this.specializ
    }
    this.ds.postShowDocs(body).subscribe(data=>{
      this.docs = data.json();
      console.log("Hola",data.json());
    })
  }

  docSelected(item: string) {
    console.log("Selected Item,Hey There!", item);
    this.navCtrl.push('SlotBookingPage',{
      docName:item,
      specializ:this.specializ
    });
  }

}
