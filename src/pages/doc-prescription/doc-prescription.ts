import { DataProvider } from './../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocPrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-prescription',
  templateUrl: 'doc-prescription.html',
})
export class DocPrescriptionPage {

  @ViewChild('myInput') myInput: ElementRef;

  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

  prescription: string;
  userData: any;
  docName:string;
  day:number;
  time:string;

  constructor(public ds:DataProvider, public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.userData = this.navParams.get('userData');
    this.day = this.navParams.get('day');
    this.time = this.navParams.get('time');
    console.log("Friday the "+this.day);
    console.log("\nHello User\n" + this.userData.EMAIL);
    this.storage.get('docLoginData').then((val) => {
      this.docName = val; //works
      console.log(this.docName);
    });
  }

  done(){
    let body = {
      pres:this.prescription,
      email:this.userData.EMAIL,
      docName:this.docName,
      day:this.day
    }
    this.ds.setPresc(body).subscribe(res=>{
      if(res.json().status == 200){
        alert("U R DONE, NEXT PATIENT PLZ!");
        this.navCtrl.pop();
      }
      else{
        alert("Some tech issue");
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocPrescriptionPage');
  }

}
