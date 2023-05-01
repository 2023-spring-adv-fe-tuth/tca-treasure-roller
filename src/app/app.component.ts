import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal){}

  public open({ modal }: { modal: any; }): void {
    this.modalService.open(modal);
  }

  emailAddress = "";

  saveEmail = async() => {
    try {
      await localforage.setItem( // setItem takes key-value pair
        "emailAddress" // key
        , this.emailAddress // value
      )
    } catch (err) {
      console.log(err);
    };
  };

  title = 'tca-treasure-roller-2';
}
