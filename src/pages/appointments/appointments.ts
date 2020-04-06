import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

  specials: any = [];
  searchTerm: string = "";
  email: string;
  constructor(private menu: MenuController, private storage: Storage, public ds: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.showCredentials();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleepEx() {
    this.ds.storeTheToken();
    await this.delay(600);
    this.getSpecializations();
  }

  getDoctor(special: string) {
    this.navCtrl.push('DocListPage', { speciali: special });
  }

  getSpecializations() {
    this.ds.getLocalSpecial().subscribe(data => {
      this.specials = data.json();
    })
  }

  setFilteredItems() {
    this.specials = this.ds.filterSpecializations(this.searchTerm);
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(true);
    this.setFilteredItems();
  }

  showCredentials() {
    this.storage.get('data').then((val) => {
      this.email = val.email1;
      this.getUserInfor();
      console.log('Your data is', val);
    });
  }
  getUserInfor() {
    let body = {
      mail: this.email
    }
    console.log(this.email);
    this.ds.getUserInfo(body).subscribe(res=>{
      console.log(res.json());
      let userData = res.json()[0];
      console.log(userData.mobile);
      let mobId = {
        mobileId: userData.mobile
      }
      this.storage.set('name',userData.NAME);
      this.storage.set('mobId', mobId);
    })
  }

  ionViewDidLoad() {
    this.sleepEx();
    console.log('ionViewDidLoad AppointmentsPage');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu

    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

}
