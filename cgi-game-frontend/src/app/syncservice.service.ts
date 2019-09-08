import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SyncserviceService {

  constructor(private httpclient: HttpClient, ) {
  }
  getAllGame() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Token ' + "cd77d31886017891e2405c505f75d089133dfafc"
      })
    };
    console.log('headers is ',  httpOptions );
    return this.httpclient.get('https://cgi-gamelist.herokuapp.com/game-api/get_all_game/', httpOptions);
  }
  getfiltergame(name) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Token ' + "cd77d31886017891e2405c505f75d089133dfafc"
      })
    };
    console.log('headers is ',  httpOptions );
    return this.httpclient.get('https://cgi-gamelist.herokuapp.com/game-api/get_all_game/?title='+name, httpOptions);

  }
}
