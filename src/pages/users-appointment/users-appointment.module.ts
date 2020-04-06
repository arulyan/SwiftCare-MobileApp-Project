import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersAppointmentPage } from './users-appointment';

@NgModule({
  declarations: [
    UsersAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersAppointmentPage),
  ],
})
export class UsersAppointmentPageModule {}
