import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncounterBudget } from '../treasure-types';

@Component({
  selector: 'app-parameters-screen',
  templateUrl: './parameters-screen.component.html',
  styleUrls: ['./parameters-screen.component.css']
})
export class ParametersScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private svc: TreasureSvcService
  ) {};


  extraPlayers: {
    name: string;
    checked: boolean;
  }[] = [];

  hoardName = "";
  encounterLevel = "";
  encounterLevelSelect = this.svc.elTrack;
  // foundBudget = 0 ? 0 : this.encounterLevelSelect.find(x => x.label == this.encounterLevel)?.budget;
  budget = 0; //? 0 : Number(this.foundBudget);
  ngOnInit(): void {
    this.extraPlayers = this.svc.getPlayerNames().map(x => ({
      name: x,
      checked: false
    }));

    console.log(this.extraPlayers);
  };

  rollTreasure = () => {
    if (this.encounterLevel.length == 0) {
      return;
    }
    this.router.navigateByUrl("result-screen");
    console.log(this.svc.elTrack.filter(x => x.label == this.encounterLevel));
    this.svc.hoardSetup = {
      name: this.hoardName ? this.hoardName : "Encounter",
      encounterLevel: this.encounterLevel,
      budget: this.budget ? this.budget : Number(this.encounterLevelSelect.find(x => x.label == this.encounterLevel)?.budget),
      timeStamp: new Date().toISOString()
    };
  };

}
