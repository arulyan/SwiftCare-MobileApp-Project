import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocPrescriptionPage } from './doc-prescription';

@NgModule({
  declarations: [
    DocPrescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(DocPrescriptionPage),
  ],
})
export class DocPrescriptionPageModule {}
