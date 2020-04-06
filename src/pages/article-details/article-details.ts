import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {

  datas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datas = this.navParams.get('goat');
    console.log(this.datas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailsPage');
  }

}
