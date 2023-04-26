import { TreasureSvcService } from './../treasure-svc.service';
import { Encounter, Loot, HoardSetup, getItemNames, gatherLoot } from './../treasure-types';
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

  openChest: Loot[] = [];
  encounterLoot = gatherLoot(this.svc.charts, this.openChest, this.svc.hoardSetup.budget);
  addMe = this.svc.otherHoard;
  showMe: Loot[] = this.encounterLoot[0];
  reRoll = gatherLoot(this.svc.charts, this.openChest, this.svc.hoardSetup.budget);
  

  

  rerollTreasure = () => {
    this.showMe = this.reRoll[0];
  };

  ngOnInit(): void {
    console.log(this.svc.hoardSetup);
    if (this.svc.hoardSetup.name.length > 0) {
      console.log("encounterLoot");
      console.log(this.encounterLoot[0]);
      console.log("rerollTreasure");
      console.log(this.reRoll[0]);
    };
  };

  saveTreasure = () => {
    this.svc.addGameResult({
      winner: "Foxswallow",
      players: ["Foxswallow", "Minion One", "Minion Two"]
    });
    this.svc.forgeHistory(this.addMe);
    this.location.historyGo(-2);
  };
}
