import { Loot, Sell } from './../treasure-types';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TreasureSvcService } from '../treasure-svc.service';

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
  sellMe: Loot[] = [];

  toSell = (items: Loot[]) => {
    let i = 0;
    let sellThese: Sell[] = [];
    let sellMe: Sell = {
        item: {
            itemName: "",
            saleValue: 0,
            notes: ""
        },
        checked: false
    };
    do {
        sellMe = {
            item: items[i],
            checked: false
        }
        sellThese = [ ...sellThese, sellMe]
        i++
    }
    while (i < items.length);
    return sellThese;
  }

  showMe = this.toSell(this.svc.passHoard.items)

  get total() {
    return 0
  }
  
  updateHoard = () => {
    
    this.loc.historyGo(-1);
  }
  
}
