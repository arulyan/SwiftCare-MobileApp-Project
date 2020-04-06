import { DataProvider } from './../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the BookingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-details',
  templateUrl: 'booking-details.html',
})
export class BookingDetailsPage {
  formgroup: FormGroup;
  cname: AbstractControl;
  mail: AbstractControl;
  num: AbstractControl;
  buttonDisabled

  public name1: any;
  public email1: any;
  public num2: string;
  public mobId:string;

  public bookingData:any;

  constructor(public ds:DataProvider, public storage: Storage, public formbuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.formgroup = this.formbuilder.group({
      cname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      mail: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
      num: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)])],

    });

    this.cname = this.formgroup.controls['cname'];
    this.mail = this.formgroup.controls['mail'];
    this.num = this.formgroup.controls['num'];
    this.showCredentials();
    this.bookingData = this.navParams.get('data');
  }

  //Confirm Appointment
  confirmApp(){
    //Add 3 new property to our json object!
    this.bookingData.username = this.name1;
    this.bookingData.email = this.email1;
    this.bookingData.contact = this.num2;
    this.bookingData.mobId = this.mobId;
    console.log(this.bookingData);
    this.ds.bookIt(this.bookingData).subscribe(res=>{
      if(res.json().status == 401){
        alert("Some Technical Issue!");
      }
      else if(res.json().status == 451){
        alert("You already have booked one appointment with the doctor! Finish that 1st and you can book the next appointment");
      }
      else{
        alert("Booking Successful!");
      }
    })
    this.navCtrl.setRoot('AppointmentsPage');
  }

  showCredentials(){
    this.storage.get('data').then((val) => {
      this.email1 = val.email1; //works
      console.log('Your data is', val);
      //this.bookingData.email = val.email1; //Adds a new property to our json object!
      console.log(this.bookingData);
    });
    this.storage.get('mobId').then((val) => {
      this.mobId = val.mobileId;
      console.log('Your MobId is', val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingDetailsPage');
  }

}
