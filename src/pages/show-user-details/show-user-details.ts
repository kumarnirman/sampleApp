import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowUserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-user-details',
  templateUrl: 'show-user-details.html',
})
export class ShowUserDetailsPage {
  userDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userDetail = this.navParams.get('userDetail');
    console.log(" this.userDetail",  this.userDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowUserDetailsPage');
  }

}
