import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-in-queue',
  templateUrl: './waiting-in-queue.component.html',
  styleUrls: ['./waiting-in-queue.component.css'],
})
export class WaitingInQueueComponent implements OnInit {
  constructor() {}

  @Input() parentClass: any;

  ngOnInit(): void {}
}
