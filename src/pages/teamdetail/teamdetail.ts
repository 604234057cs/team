import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../Models/teammodels';
import { TeamrestProvider } from '../../providers/teamrest/teamrest';

/**
 * Generated class for the TeamdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teamdetail',
  templateUrl: 'teamdetail.html',
})
export class TeamdetailPage {
  studentID:string;
  friend:Friend;

  constructor(public teamrest:TeamrestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamdetailPage');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
    this.teamrest.getFriendsList().subscribe( data =>{
      this.friend=data.filter(friend=> friend.studentID === this.studentID)[0];
      }
    );
  }
  goBack(){
    this.navCtrl.pop();
  }

}
