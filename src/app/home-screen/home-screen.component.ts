import { Hoard } from './../treasure-types';
import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as localforage from 'localforage';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  [x: string]: any;
  
  constructor(
    private gameSvc: TreasureSvcService,
    private router: Router
  ) {}

  treasureHistory: Hoard[] = [];

  displayHoard = (hoard: Hoard) => {
    this.router.navigateByUrl("hoard-screen");
    this.gameSvc.passHoard = hoard;
  }

  async ngOnInit() {
    try {
      this.emailAddress = await localforage.getItem("emailAddress") ?? "";
      this.treasureHistory = this.gameSvc.testH;
    }
    catch (err) {
      console.log(err);
    };
    
  }

  emailAddress = "";

  saveEmail = async() => {
    try {
      await localforage.setItem( // setItem takes key-value pair
        "emailAddress" // key
        , this.emailAddress // value
      )
    } catch (err) {
      console.log(err);
    };
  };
}
