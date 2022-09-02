import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() public parentClass: any;

  showTab(tabNo: string) {
    this.parentClass.tab = tabNo;
  }

  ELEMENT_DATA = [
    {
      position: 1,
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
      fifth: 5,
      sixth: 6,
      seventh: 7,
    },
    {
      position: 2,
      first: 71,
      second: 62,
      third: 53,
      fourth: 44,
      fifth: 35,
      sixth: 26,
      seventh: 17,
    },
    {
      position: 3,
      first: 171,
      second: 262,
      third: 353,
      fourth: 444,
      fifth: 535,
      sixth: 626,
      seventh: 717,
    },
    {
      position: 4,
      first: 'Rohit',
      second: 'Mahajan',
      third: 'This',
      fourth: 'Is',
      fifth: 'a',
      sixth: 'Dummy',
      seventh: 'Text',
    },
    {
      position: 5,
      first: 'My',
      second: 'Project',
      third: 'Name',
      fourth: 'is',
      fifth: 'From',
      sixth: 'Nomis',
      seventh: 'Solution',
    },
  ];

  newEle: any;

  addEle(index: number) {
    this.newEle = this.ELEMENT_DATA[index];
    this.ELEMENT_DATA.splice(index, 1);
    this.ELEMENT_DATA = [this.newEle, ...this.ELEMENT_DATA];
  }

  deleteEle(index: number) {
    this.ELEMENT_DATA.splice(index, 1);
  }
}
