import { Storage } from '@ionic/storage';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  token: string;

  public items: any = [];
  public specializations: any = [];

  apiShowDocUrl = "http://localhost:3000/showDocs";
  apiNewURL = "http://localhost:3000/comprobs";
  apiComDisURL = "http://localhost:3000/commonprobdiseases";
  specializaitonsLocalUrl = 'assets/data/specializations.json'; //Beware the single/double quotes
  urlAppointment: string = "http://localhost:3000/slots";
  showSlotsUrl: string = "http://localhost:3000/showSlots";
  bookingConfirmUrl: string = "http://localhost:3000/booked";
  docAppointmentListUrl: string = "http://localhost:3000/showAppointments";
  getUserInfoUrl: string = "http://localhost:3000/userDetails";
  presUrl: string = "http://localhost:3000/pres";
  historyUrl: string = "http://localhost:3000/history";
  articlesUrl: string = "http://localhost:3000/showArticles";
  bookedAppointmentUrl:string = "http://localhost:3000/showAppointmentsWithDoctor";
  cancelAppointmentUrl:string = "http://localhost:3000/cancel";
  showSlotsToDoctorUrl:string = "http://localhost:3000/showSlotsToDoctor";
  deleteSlotUrl:string = "http://localhost:3000/deleteSlot";
  AddNewSlot:string = "http://localhost:3000/addSlot";
  getDocInfoUrl:string = "http://localhost:3000/getDocInfo";

  constructor(public http: Http, public storage: Storage) {

    //Initially shows the total number of Common Problems
    this.getComProbs().subscribe(data => {
      this.items = data;
      console.log(data);
    })

    this.getLocalSpecial().subscribe(data => {
      this.specializations = data;
      console.log("getLocalFxTriggered!\n" + data);
    })

    console.log('Hello DataProvider Provider');
  }

  //Store the Token in a global var
  storeTheToken() {
    this.storage.get('token').then((val) => {
      this.token = val; //works
      console.log("Hello i am the DS token:" + this.token);
    });
  }

  getLocalSpecial() {
    console.log("The token has been stored!" + this.token);
    return this.http.get(this.specializaitonsLocalUrl, {
      params: new HttpParams().append('token', this.token)
    });
  }

  //Filters Seachbar for Doc Specializations
  filterSpecializations(searchTerm) {
    console.log("filterFxWasTriggered!")
    return this.specializations.filter(item => {
      return item.specialization.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; //items array, item access each array ele,converted to lowercase
      //indexOf() searches the searchTerm substring in the items array, and gives the array ele which have that substring in it! #nested Return
    })
  }

  //Filters Seachbar for common Problems
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; //items array, item access each array ele,converted to lowercase
      //indexOf() searches the searchTerm substring in the items array, and gives the array ele which have that substring in it! #nested Return
    })
  }

  //Gets the Common Probs
  getComProbs() {
    console.log("Get the ComProbs");
    return this.http.get(this.apiNewURL);
  }

  getArticles() {
    console.log("Show the articles");
    return this.http.get(this.articlesUrl, {
      params: new HttpParams().append('token', this.token)
    });
  }

  //Posts to Probable Diseases
  postComDis(body) {
    console.log("Get the ComDiseases");
    return this.http.post(this.apiComDisURL, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  //show the docs
  postShowDocs(body) {
    return this.http.post(this.apiShowDocUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  //Show Available Slots --> To be deleted
  getSlots(body) {
    return this.http.post(this.urlAppointment, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  //Show Available Slots Updated
  getUpdatedSlots(body) {
    console.log("y am i being running!?")
    return this.http.post(this.showSlotsUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  showSlotsToDoctor(body) {
    console.log("am i running?")
    return this.http.post(this.showSlotsToDoctorUrl,body);
  }

  //Book the Slot
  bookIt(body) {
    return this.http.post(this.bookingConfirmUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  getDocAppoi(body) {
    return this.http.post(this.docAppointmentListUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  getUserInfo(body) {
    return this.http.post(this.getUserInfoUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  //Input the Prescription
  setPresc(body) {
    return this.http.post(this.presUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  //get the history of all the appointments made to the doc by the patient
  getHistory(body) {
    console.log("History ran:" + body.userEmail);
    return this.http.post(this.historyUrl, body,{
      params: new HttpParams().append('token', this.token)
    });
  }

  getBookedAppointments(body) {
    return this.http.post(this.bookedAppointmentUrl,body);
  }

  cancelAppointment(body) {
    return this.http.post(this.cancelAppointmentUrl,body);
  }

  deleteSlot(body) {
    return this.http.post(this.deleteSlotUrl,body);
  }
  
  addNewSlot(body) {
    return this.http.post(this.AddNewSlot,body);
  }

  getDocInfo(body) {
    return this.http.post(this.getDocInfoUrl,body);
  }
  
}
