import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css'],
})
export class InProgressComponent implements OnInit {
  @Input() parentClass: any;
  constructor() {}

  ngOnInit(): void {}
}
