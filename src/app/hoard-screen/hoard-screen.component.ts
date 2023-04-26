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
  showMe = this.svc.passHoard.items;

  get total() {
    return this.showMe.filter(x => x.checked)
      .reduce(
        (acc, a) => acc + a.saleValue, 0
      );
  }
  
  updateHoard = () => {
    this.svc.passHoard.items = this.showMe.filter(x => !x.checked);
    console.log("checked:");
    console.log(this.showMe.filter(x => x.checked));
    console.log("not checked");
    console.log(this.showMe.filter(x => !x.checked))
    this.loc.historyGo(-1);
  }
  
}
