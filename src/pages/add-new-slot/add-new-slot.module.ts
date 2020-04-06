import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewSlotPage } from './add-new-slot';

@NgModule({
  declarations: [
    AddNewSlotPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewSlotPage),
  ],
})
export class AddNewSlotPageModule {}
