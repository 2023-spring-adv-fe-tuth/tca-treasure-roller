import { Hoard } from './../treasure-types';
import { DisplayPlayer } from './../repl-type-definitions';
import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  leaderData: DisplayPlayer[] = [];

  treasureHistory: Hoard[] = [];

  displayHoard = (hoard: Hoard) => {
    this.router.navigateByUrl("hoard-screen");
    this.gameSvc.passHoard = hoard;
  }

  ngOnInit(): void {
    this.leaderData = this.gameSvc.leaderboard();
    this.treasureHistory = this.gameSvc.testH;
  }
}
