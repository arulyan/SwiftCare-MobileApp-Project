import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookedAppointmentsPage } from './booked-appointments';

@NgModule({
  declarations: [
    BookedAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookedAppointmentsPage),
  ],
})
export class BookedAppointmentsPageModule {}
