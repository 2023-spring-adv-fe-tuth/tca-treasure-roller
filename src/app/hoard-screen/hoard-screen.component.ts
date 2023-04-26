import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TreasureSvcService } from '../treasure-svc.service';
import { checkTheItems } from '../treasure-types';

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
  showMe = checkTheItems(this.svc.passHoard.items);

  get total() {
    return this.showMe.filter(x => x.checked)
      .reduce(
        (acc, a) => acc + a.saleValue, 0
      );
  }
  
  updateHoard = () => {
    this.loc.historyGo(-1);
  }
  
}
