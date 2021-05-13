import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BaseService } from '../../Services/base-service';
import{ getUserDetailsApi, loadingContent } from '../../environments/environment';
import { GetUserDetailsService } from '../../Services/getUserDetails';
import { ShowUserDetailsPage } from '../show-user-details/show-user-details';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any = [];
  loading: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private network: Network,
    private alertCtrl: AlertController,
    private platform: Platform,
    private getUserDetailsService: GetUserDetailsService) {
      
      if (this.platform.is('cordova')) {
        this.networkObserver();
      }
      else{
        this.loadUserDetails();
      }
  }

  loadUserDetails(){
    return new Promise((resolve, reject) => {
      try {
        this.showLoading();
        this.getUserDetailsService.getUserDetails(getUserDetailsApi).subscribe((data) => {
          if (data != null && data != undefined) {
            resolve(data);
            console.log("data", data);
            this.userDetails = data;
            this.loading.dismiss();
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        });

      } catch (error) {
        reject(error);
      }

    }); 
  }

  checkNetwork(){

  }

  selectUser(user){
    this.navCtrl.push(ShowUserDetailsPage, {userDetail: user});
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: loadingContent
    });
    this.loading.present();
  }
  alert: any;
  showNetworkAlert() {
      this.alert = this.alertCtrl.create({
        enableBackdropDismiss: false,
        title: "Network Error",
        subTitle: "Please connect to internet for better experience",
        buttons: [{
          text: "Ok",
          handler: () => {
            this.alert.dismiss();
            return false;
          }
        }]
      });
      this.alert.present();
  }

    networkObserver() {
    if (this.network.type !== 'none' && this.network.type !== 'unknown') {

    }
    else {
      this.showNetworkAlert();
    }

    // watch network for a disconnect
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.showNetworkAlert();
    });

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.loadUserDetails();
      setTimeout(() => {
        this.alert.dismiss();

      }, 3000);
    });
  }


}
