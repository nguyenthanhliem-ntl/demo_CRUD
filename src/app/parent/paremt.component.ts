import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paremt',
  template:`
  <h3>{{value}}</h3>
  <app-childrent (myClick)="changValue($event)"></app-childrent>`,
    styleUrls: ['./parent.component.css']
})
export class ParemtComponent implements OnInit {
value = 0;
name: string;
age: number;
  constructor() { }

  ngOnInit() {
  }
changValue(isAdd :boolean) {
    if(isAdd){
      this.value = this.value +1;
    }else{
      this.value =this.value -1;
    }
}


}
