import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active: number = 0;
  documents: boolean = false;
  payout: boolean = false;
  time: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setActive(i: number) {
    this.active = i;
  }
}
