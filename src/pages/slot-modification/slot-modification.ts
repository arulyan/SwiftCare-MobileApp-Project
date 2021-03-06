import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlotModificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slot-modification',
  templateUrl: 'slot-modification.html',
})

export class SlotModificationPage {
  //styling variable i
  selectedIndex:number;

  doc:string;
  slots:any = [];
  num: number = 0;
  curMonth: number;
  //specialization: string;
  startDate = new Date();
  Dates: any = [];
  day:number;
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  constructor(public ds:DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.doc = this.navParams.get('docName');
    //this.specialization = this.navParams.get('specializ');
    this.Dates = this.buildDates(this.startDate);
    
    this.show(this.num,this.startDate.getMonth(),this.startDate.getDate());
  }

  ionViewWillEnter() {
    this.showSlots();
  }

  buildDates(start) {
    let arr = new Array(), dt = new Date(start);
    for (let i = 0; i < 7; i++) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

  // showSlots(){
  //   console.log(this.Dates[this.num].getDate()+" "+this.days[this.Dates[this.num].getDay()]);
  //   console.log(this.doc);
  //   let body = {
  //     doco:this.doc,
  //     day:this.Dates[this.num].getDay()
  //   }
  //   this.ds.getSlots(body).subscribe(res=>{
  //     console.log(res);
  //     this.slots = res;
  //   })
  // }

  //Show Updated Slots list
  showSlots(){
    console.log(this.Dates[this.num].getDate()+" "+this.days[this.Dates[this.num].getDay()]);
    //console.log(this.doc);
    let body = {
      docName:this.doc,
      weekday:this.Dates[this.num].getDay()
    }
    this.ds.showSlotsToDoctor(body).subscribe(res=>{
      console.log(res.json());
      this.slots = res.json();
    })
  }

  //This function is juz for testing 
  show(i,mon,day) {
    this.num = i;
    this.curMonth = mon;
    this.day = day;
    console.log(`${i} and the current month is :${this.curMonth} and the day is ${this.day}`);
    console.log("\nHello Show!?");
    this.selectedIndex = i;
  }

  //showTime
  showTime(time){
    let body = {
      time:time,
      docName:this.doc,
      weekday:this.Dates[this.num].getDay()
    }
    this.ds.deleteSlot(body).subscribe(res=>{
      console.log(res.json().status + "Slot Deleted!");
    })
    alert("Slot Will be deleted!");
    console.log(time);
  }

  addSlot() {
    console.log("The slot will be added on day"+this.num);
    this.navCtrl.push('AddNewSlotPage',{docName:this.doc,weekday:this.num});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotBookingPage');
  }

}