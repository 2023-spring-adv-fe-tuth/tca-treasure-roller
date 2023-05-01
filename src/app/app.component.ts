import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tca-treasure-roller-2';
  constructor(private modalService: NgbModal){}

  async ngOnInit() {
    try {
      this.emailAddress = await localforage.getItem("emailAddress") ?? "";
    }
    catch (err) {
      console.log(err);
    };
  }

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

  
}
