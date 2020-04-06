import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonDiseasesPage } from './common-diseases';

@NgModule({
  declarations: [
    CommonDiseasesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonDiseasesPage),
  ],
})
export class CommonDiseasesPageModule {}
