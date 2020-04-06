import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommonProblemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-common-problems',
  templateUrl: 'common-problems.html',
})
export class CommonProblemsPage {

  items:any;
  searchTerm:string = "";

  constructor(private ds: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.setFilteredItems(); 
  }

  setFilteredItems(){
    this.items = this.ds.filterItems(this.searchTerm);
  }

  open(cat){
    this.navCtrl.push('CommonDiseasesPage',{getCat:cat}); //Lazy Loading by just calling the export class name
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CommonProblemsPage');
  // }

}
