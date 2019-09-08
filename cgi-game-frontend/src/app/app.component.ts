import { Component , OnInit } from '@angular/core';
import {SyncserviceService} from './syncservice.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cgi-game-frontend';

  public  Data: any ;
  public namedata: any ;
  public searchname= "";
  public items: any[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  constructor(private syncservice: SyncserviceService) { }

  ngOnInit() {
    this.getAllData();
    // this.getname();
  }

  searchdata(event) {
    console.log(event.target.value);
   this.searchname = event.target.value;

  }
  search(event){
  console.log("search");
    this.syncservice.getfiltergame(this.searchname).subscribe((data)=>{
      this.Data = data;
    },
      (error)=>{
      console.log(error);
      })
  }


  // getname() {
  //
  //   this.syncservice.getallgamename()
  //     .subscribe(data => {
  //         console.log(data);
  //         // this.data = result.data ;
  //         this.namedata = data;
  //
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //
  // }

  getAllData() {
    this.syncservice.getAllGame().subscribe(data => {

        this.Data = data ;
        console.log("data is ",this.Data);

      },
      error => {
        console.log(error);
      });
  }



}
