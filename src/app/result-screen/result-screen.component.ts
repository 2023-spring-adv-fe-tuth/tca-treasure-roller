import { TreasureSvcService } from './../treasure-svc.service';
import { Loot, gatherLoot, Hoard, fullHoardValue, sellWholeHoard } from './../treasure-types';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})

export class ResultScreenComponent {
  constructor(
    private location: Location,
    private svc: TreasureSvcService
  ) {};

  encounterLoot = gatherLoot(this.svc.charts, this.svc.hoardSetup.budget);
  showMe: Loot[] = this.encounterLoot[0];
  coins = this.encounterLoot[1];
  reRoll = gatherLoot(this.svc.charts, this.svc.hoardSetup.budget);
  
  rerollTreasure = () => {
    this.showMe = this.reRoll[0];
  };

  addHoard: Hoard = {
    name: this.svc.hoardSetup.name,
    timeStamp: this.svc.hoardSetup.timeStamp,
    budget: this.svc.hoardSetup.budget,
    encounterLevel: this.svc.hoardSetup.encounterLevel,
    items: this.showMe,
    totalValue: fullHoardValue(this.showMe),
    totalSaleValue: sellWholeHoard(this.showMe),
    remainder: this.svc.hoardSetup.budget - fullHoardValue(this.showMe)
  };

  saveTreasure = () => {
    this.svc.forgeHistory(this.addHoard);
    this.location.historyGo(-2);
  };
}
