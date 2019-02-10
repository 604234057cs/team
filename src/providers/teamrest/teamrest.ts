import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../Models/teammodels';

/*
  Generated class for the TeamrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamrestProvider {

  private url:string="https://raw.githubusercontent.com/604234057cs/data/master/data.json";

  constructor(public http: HttpClient) {
    console.log('Hello TeamrestProvider Provider');
  }

  getFriendsList():Observable<any>{
    return this.http.get<Friend>(this.url);
  }
}
