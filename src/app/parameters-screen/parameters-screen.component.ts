import { TreasureSvcService } from './../treasure-svc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

  form = new FormGroup({
    encounterLevel: new FormControl()
  })

  extraPlayers: {
    name: string;
    checked: boolean;
  }[] = [];

  get encounterLevel(): any {
    return this.form.get('encounterLevel');
  }
  hoardName = "";
  // encounterLevel = "";
  encounterLevelSelect = this.svc.elTrack;

  ngOnInit(): void {
    this.extraPlayers = this.svc.getPlayerNames().map(x => ({
      name: x,
      checked: false
    }));

    console.log(this.extraPlayers);
  };

  rollTreasure = () => {
    this.router.navigateByUrl("result-screen");
    this.hoardName = this.hoardName ? this.hoardName : "Encounter";
    this.svc.hoardSetup = {
      name: this.hoardName,
      encounterLevel: this.encounterLevel,
      timeStamp: new Date().toISOString()
    };
  };

}
