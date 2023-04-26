import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TreasureSvcService } from '../treasure-svc.service';
import { Loot, getItemNames } from '../treasure-types';

@Component({
  selector: 'app-hoard-screen',
  templateUrl: './hoard-screen.component.html',
  styleUrls: ['./hoard-screen.component.css']
})
export class HoardScreenComponent {
  constructor (
    private loc: Location,
    private svc: TreasureSvcService
  ) {}

  hoardToShow = this.svc.passHoard;
  showMe = this.svc.passHoard.items;
  checkMe: {
    itemName: string;
    checked: false;
}[] = [];

  ngOnInit(): void {
    this.checkMe = getItemNames(this.svc.passHoard.items).map(x => ({
      itemName: x,
      checked: false
    }));
  }
  
  updateHoard = () => {
    this.loc.historyGo(-1);
  }
  
}
