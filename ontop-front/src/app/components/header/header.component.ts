import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contracts: boolean = false;
  documents: boolean = false;
  payout: boolean = false;
  time: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  contractsActive(){
    this.contracts = true;
    this.documents = false;
    this.payout = false;
    this.time = false;

  }
  documentsActive(){
    this.documents = true;
    this.contracts = false;
    this.payout = false;
    this.time = false;
  }
  payoutActive(){
    this.payout = true;
    this.contracts = false;
    this.documents = false;
    this.time = false;
  }
  timeActive(){
    this.time = true;
    this.contracts = false;
    this.documents = false;
    this.payout = false;
  }

}
