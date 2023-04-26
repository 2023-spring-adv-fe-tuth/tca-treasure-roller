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
  checked = false;

  get total() {
    return 
  }
  
  updateHoard = () => {
    
    this.loc.historyGo(-1);
  }
  
}
