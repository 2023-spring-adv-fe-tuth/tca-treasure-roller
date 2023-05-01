import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tca-treasure-roller-2';
  constructor(private modalService: NgbModal){}


  public open({ modal }: { modal: any; }): void {
    this.modalService.open(modal);
  }

  

  
}
