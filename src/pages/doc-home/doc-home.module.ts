import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocHomePage } from './doc-home';

@NgModule({
  declarations: [
    DocHomePage,
  ],
  imports: [
    IonicPageModule.forChild(DocHomePage),
  ],
})
export class DocHomePageModule {}
