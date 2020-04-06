import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, /*FormGroup, Validators, AbstractControl*/ } from '@angular/forms';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // formgroup: FormGroup;
  // pass: AbstractControl;
  // mail: AbstractControl;

  public email1: any = "";
  public pass1: any = "";
  items = [];
  dis:boolean = true;
  constructor(private menu: MenuController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, private http: Http) {
    // this.formgroup = this.formbuilder.group({
    //   pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])],
    //   mail: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],

    // });
    // this.pass = this.formgroup.controls['pass'];
    // this.mail = this.formgroup.controls['mail'];
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
      pass1: this.pass1,
      email1: this.email1,
    }
    this.http.post('http://localhost:3000/login', Data).subscribe(response => {
      console.log('POST Response:', response.json().status);
      this.items = response.json();
      if (response.json().status == 400 || response.json().status == 404) {
        alert('Failed to Login');
      }
      else {
        alert('Successfully Logged In');
        // set a key/value
        console.log(response.toString());
        this.storage.set('token', response.json().toString());
        this.storage.set('data', Data);
        this.navCtrl.push("TabsPage");
      }
    });
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

  signin()
  {
    this.navCtrl.push('SignUpPage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
