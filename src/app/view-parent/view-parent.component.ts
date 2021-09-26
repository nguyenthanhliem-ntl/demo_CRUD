import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildComponent} from "../view-child/view-child.component";

@Component({
  selector: 'app-view-parent',
  styleUrls: ['./view-parent.component.css'],
  templateUrl: './view-parent.component.html',

  // template:`<button (click)="onAdd()">tang</button>
  //   <app-view-child></app-view-child>`
})
export class ViewParentComponent implements OnInit {
  // @ts-ignore
  @ViewChild(ViewChildComponent)
  myChild: ViewChildComponent;
  date1= new Date(2020,7,5);
  constructor() { }

  ngOnInit() {
  }
    onAdd() {
      this.myChild.value++;
}
}
