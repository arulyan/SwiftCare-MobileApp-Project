import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DoctorLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-login',
  templateUrl: 'doctor-login.html',
})
export class DoctorLoginPage {

  formgroup: FormGroup;
  pass: AbstractControl;
  mail: AbstractControl;

  docName:string;

  public email1: any;
  public pass1: any;
  items = [];
  dis:boolean = true;
  constructor(private storage: Storage,private http: Http, private menu: MenuController, public formbuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.formgroup = this.formbuilder.group({
      pass: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]*')])],
      mail: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],

    });
    this.pass = this.formgroup.controls['pass'];
    this.mail = this.formgroup.controls['mail'];
  }

  checkFields() {
    if(this.email1 != "" && this.pass1 != "") {
      this.dis = false;
    }
    else {
      this.dis = true;
    }
  }

  log() {
    let Data = {
      pass21: this.pass1,
      email21: this.email1,
    }
    this.http.post('http://localhost:3000/logindoctor', Data).subscribe(response => {
      if (response.json().status == 400) {
        alert('FAILED TO LOG IN');
      }
      else {
        console.log(response.json()[0].docname);
        alert('Successfully Logged In');
        this.docName = response.json()[0].docname;
        this.storage.set('docLoginData', this.docName);
        console.log("the Doctor's name is:"+this.docName)
        this.navCtrl.push("DocHomePage",{docname:this.docName});
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorLoginPage');
  }

}
