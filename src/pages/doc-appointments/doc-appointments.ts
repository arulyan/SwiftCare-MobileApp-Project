import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DocAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-appointments',
  templateUrl: 'doc-appointments.html',
})
export class DocAppointmentsPage {

  //styling variable i
  selectedIndex:number;

  doc:string;
  Dates: any = [];
  startDate = new Date();
  num: number = 0; // This is used in switch case, currently the 0 case
  curMonth: number;
  day:number;

  appointments:any;

  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // userData:any;

  constructor(public ds: DataProvider,public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('docLoginData').then((val) => {
      this.doc = val; //works
      console.log('Your data is', val);
      //this.bookingData.email = val.email1; //Adds a new property to our json object!
      console.log(this.doc);
    });
    
    this.show(this.num,this.startDate.getMonth(),this.startDate.getDate());
  }

  buildDates(start) {
    let arr = new Array(), dt = new Date(start);
    for (let i = 0; i < 7; i++) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

  //This function is to be modified to show Appointments!
  showSlots(){
    console.log(this.Dates[this.num].getDate()+" "+this.days[this.Dates[this.num].getDay()]);
    console.log(this.doc);
    let body = {
      docName:this.doc,
      weekday:this.Dates[this.num].getDay()
    }
    this.ds.getDocAppoi(body).subscribe(res=>{
      console.log(res.json());
      this.appointments = res.json();
    })
  }

  show(i,mon,day) {
    this.num = i;
    this.curMonth = mon;
    this.day = day;
    console.log(`${i} and the current month is :${this.curMonth} and the day is ${this.day}`);
    this.selectedIndex = i;
  }

  showUserDetails(email,time){
    let body = {
      mail: email
    }
    console.log(email);
    this.ds.getUserInfo(body).subscribe(res=>{
      console.log(res.json());
      let userData = res.json()[0];
      console.log(this.appointments);
      this.navCtrl.push('DocPrescriptionPage',{userData:userData,day:this.day,time:time});
    })
  }

  ionViewWillEnter() {
    this.Dates = this.buildDates(this.startDate);
    this.showSlots();
    console.log('ionViewDidLoad DocAppointmentsPage');
  }

}
