import { Storage } from '@ionic/storage';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookedAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booked-appointments',
  templateUrl: 'booked-appointments.html',
})
export class BookedAppointmentsPage {

  userEmail: any;
  appointments: any;
  months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DataProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookedAppointmentsPage');
  }

  ionViewWillEnter() {
    this.storage.get('data').then((val) => {
      this.userEmail = val.email1; //works
      console.log('Your data is', this.userEmail);
    });
    this.bookedAppointments();
  }

  private async bookedAppointments() {
    await this.delay(200);
    let body = {
      userEmail: this.userEmail
    }
    this.ds.getBookedAppointments(body).subscribe(data => {
      this.appointments = data.json();
      console.log(this.appointments);
    })
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  cancelAppointment(appoi) {
    let body = {
      docName: appoi.docname,
      email: appoi.email,
      month: appoi.month,
      day: appoi.day,
      weekday: appoi.weekday
    }
    this.ds.cancelAppointment(body).subscribe(data => {
      if (data.json().status == 200) {
        alert("Appointment Cancelled");
        this.navCtrl.pop();
      }
      else{
        alert("Technical Issue!");
      }
    })
    console.log(appoi.docname);
  }
}
