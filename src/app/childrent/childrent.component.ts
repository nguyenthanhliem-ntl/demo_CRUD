import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-childrent',
  styleUrls: ['./childrent.component.css'],
  template: `<button (click)="addParent();" >Add</button>
  <button (click)="subParent()  ;" >Sub</button>`,
})
export class ChildrentComponent implements OnInit {

  @Output() myClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


addParent() {
    this.myClick.emit(true);
}
subParent() {
    this.myClick.emit(false);
}
}
