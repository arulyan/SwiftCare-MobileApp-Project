import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonProblemsPage } from './common-problems';

@NgModule({
  declarations: [
    CommonProblemsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonProblemsPage),
  ],
})
export class CommonProblemsPageModule {}
