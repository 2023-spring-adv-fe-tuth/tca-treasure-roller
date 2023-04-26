import { TreasureSvcService } from './../treasure-svc.service';
import { Encounter, Loot, HoardSetup, getItemNames } from './../treasure-types';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})

export class ResultScreenComponent implements OnInit {
  constructor(
    private location: Location,
    private svc: TreasureSvcService
  ) {};

  addMe = this.svc.otherHoard;
  showMe = this.svc.itsTwo;
  reRoll = this.svc.reroll;

  saveTreasure = () => {
    this.svc.addGameResult({
      winner: "Foxswallow",
      players: ["Foxswallow", "Minion One", "Minion Two"]
    });
    this.svc.forgeHistory(this.addMe);
    this.location.historyGo(-2);
  };

  rerollTreasure = () => {
    this.showMe = this.reRoll;
  };

  ngOnInit(): void {
    console.log(this.svc.hoardSetup);
    console.log(getItemNames(this.svc.reroll));
  }
}
