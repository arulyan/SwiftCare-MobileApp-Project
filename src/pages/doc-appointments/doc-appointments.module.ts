import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocAppointmentsPage } from './doc-appointments';

@NgModule({
  declarations: [
    DocAppointmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(DocAppointmentsPage),
  ],
})
export class DocAppointmentsPageModule {}
