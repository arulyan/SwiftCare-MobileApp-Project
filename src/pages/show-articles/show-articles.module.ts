import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowArticlesPage } from './show-articles';

@NgModule({
  declarations: [
    ShowArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowArticlesPage),
  ],
})
export class ShowArticlesPageModule {}
