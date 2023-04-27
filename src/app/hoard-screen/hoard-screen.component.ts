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

  display = (items: Loot[]) => {
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

  toSell = (selling: Sell[]) => {
    let i = 0;
    let itemsToSell: Loot[] = [];
    do {
      itemsToSell = [ ...itemsToSell, selling[i].item];
      i++;
    }
    while (i < selling.length);
    return itemsToSell;
  }

  showMe = this.display(this.svc.passHoard.items)

  checkMe = this.showMe.filter(x => x.checked)

  get total() {
    return this.toSell(this.checkMe).reduce((acc, s) => acc + s.saleValue, 0)
  }
  
  updateHoard = () => {
    
    this.loc.historyGo(-1);
  }
  
}
