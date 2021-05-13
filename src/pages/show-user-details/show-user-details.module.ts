import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowUserDetailsPage } from './show-user-details';

@NgModule({
  declarations: [
    ShowUserDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowUserDetailsPage),
  ],
})
export class ShowUserDetailsPageModule {}
