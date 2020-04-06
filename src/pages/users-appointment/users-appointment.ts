import { DataProvider } from './../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-appointment',
  templateUrl: 'users-appointment.html',
})
export class UsersAppointmentPage {

  userEmail: string;
  histories:any;
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(public ds: DataProvider, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  private delay(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersAppointmentPage');   
  }

  ionViewWillEnter(){
    this.storage.get('data').then((val) => {
      this.userEmail = val.email1; //works
      console.log('Your data is', this.userEmail);
    });
    this.getHistory(); 
  }

  private async getHistory() {
    await this.delay(200);
    let body = {
      userEmail:this.userEmail
    }
    this.ds.getHistory(body).subscribe(data => {
      console.log(data.json());
      this.histories = data.json();
    })
    // console.log(this.histories);
  }

  showDetails(history){
    this.navCtrl.push('HistoryDetailsPage',{details:history});
  }

}
