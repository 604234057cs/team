import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../Models/teammodels';
import { TeamrestProvider } from '../../providers/teamrest/teamrest';
import { TeamdetailPage } from '../teamdetail/teamdetail';

/**
 * Generated class for the TeamlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teamlist',
  templateUrl: 'teamlist.html',
})
export class TeamlistPage {

  Friends:Friend;
  mejor:string;

  constructor(private teamrest:TeamrestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamlistPage');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.mejor=this.navParams.get("mejor");
    console.log(this.mejor);
    this.teamrest.getFriendsList().subscribe( data =>{
      this.Friends=data.filter(Friend=> Friend.mejor === this.mejor);
    });
  }

    showDetail(studentID:String){
      this.navCtrl.push( TeamdetailPage, 
        {studentID:studentID}
        );
      }
      goBack(){
        this.navCtrl.pop();
      }

}
