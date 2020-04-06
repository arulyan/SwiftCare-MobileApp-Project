import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-articles',
  templateUrl: 'show-articles.html',
})
export class ShowArticlesPage {
  
  public items: any = [];
  public res: any = [];

  constructor(public ds: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  getdata() {
    this.ds.getArticles().subscribe(data => {
      this.items = data.json();
      console.log(this.items);
    });
  }

  getDetails(item){
    this.navCtrl.push('ArticleDetailsPage',{goat:item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowArticlesPage');
  }

}
