// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams, MenuController,ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  //All image properties:
  onePic: any;
  image: File;
  files: Blob;
  path;

  //All form properties--
  formgroup: FormGroup;
  cname: AbstractControl;
  mail: AbstractControl;
  eage: AbstractControl;
  pass: AbstractControl;
  num: AbstractControl;
  bg: AbstractControl;
  add: AbstractControl;
  pm: AbstractControl;
  gen: AbstractControl;

  //Variable being used--
  public name1: any;
  public pass1: any;
  public email1: any;
  public age: any;
  public pm1: any;
  public gen1: any;
  public add1: any;
  public bg1: any;
  public num2: any;



  constructor(private menu: MenuController, public navCtrl: NavController, public formbuilder: FormBuilder, public navParams: NavParams, private http: Http,private camera: Camera, private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) {
    this.formgroup = this.formbuilder.group({
      cname: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      bg: ['', Validators.compose([Validators.required])],
      add: ['', Validators.compose([Validators.required])],
      pm: ['', Validators.compose([Validators.required,])],
      gen: ['', Validators.compose([Validators.required,])],
      eage: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      mail: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')])],
      num: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)])],

    });

    this.cname = this.formgroup.controls['cname'];
    this.eage = this.formgroup.controls['eage'];
    this.mail = this.formgroup.controls['mail'];
    this.pass = this.formgroup.controls['pass'];
    this.num = this.formgroup.controls['num'];
    this.bg = this.formgroup.controls['bg'];
    this.add = this.formgroup.controls['add'];
    this.pm = this.formgroup.controls['pm'];
    this.gen = this.formgroup.controls['gen'];

  }

  back() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  insertdata() {

    const body = new FormData();
    body.append("pass1",this.pass1);
    body.append("email1",this.email1);
    body.append("name1",this.name1);
    body.append("pm1",this.pm1);
    body.append("gen1",this.gen1);
    body.append("add1",this.add1);
    body.append("bg1",this.bg1);
    body.append("num2",this.num2);
    body.append("age",this.age);
    body.append('filename',this.files,'image.jpeg');
    // let Data = {
    //   pass1: this.pass1,
    //   email1: this.email1,
    //   name1: this.name1,
    //   pm1: this.pm1,
    //   gen1: this.gen1,
    //   add1: this.add1,
    //   bg1: this.bg1,
    //   num2: this.num2,
    //   age: this.age,
    // }
    console.log(body.get("email1"));
    console.log(body);
    this.http.post('http://localhost:3000/UserSignUp', body).subscribe(response => {
      console.log('POST Response:', response.json());

    });
    this.navCtrl.pop();
    alert('Registration Confirmed');


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

   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: '(For Testing!)',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    //Create options for the camera Dialog
    var options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    //Get the data of an image
    this.camera.getPicture(options).then(url => {


      //console.log("Image Path : "+ url);
      this.path = 'data:image/jpeg;base64,' + url;
      console.log(this.path);
      this.files = this.base64ImageToBlob(this.path);

      // this.upload();

    }, err => {
      alert("Error : " + err);
    });

  }

  base64ImageToBlob(str) {
    // extract content type and base64 payload from original string
    var pos = str.indexOf(';base64,');
    var type = str.substring(5, pos);
    var b64 = str.substr(pos + 8);

    // decode base64
    var imageContent = atob(b64);

    // create an ArrayBuffer and a view (as unsigned 8-bit)
    var buffer = new ArrayBuffer(imageContent.length);
    var view = new Uint8Array(buffer);

    // fill the view, using the decoded base64
    for (var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }

    // convert ArrayBuffer to Blob
    var blob = new Blob([buffer], { type: type });

    return blob;
  }

  // upload() {

  //   const body = new FormData();
  //   body.append('filename', this.files, 'image.jpeg');
  //   console.log(body);
  //   console.log("\n")
  //   this.http.post('http://localhost:3000/upload', body).subscribe(res => {
  //     console.log(res);
  //     alert("Success!");
  //   })
  // }

}
