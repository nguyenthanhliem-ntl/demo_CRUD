import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-degisn',
  templateUrl: './list-degisn.component.html',
  styleUrls: ['./list-degisn.component.css']
})
export class ListDegisnComponent implements OnInit {
  list = [
    { name: 'long' ,age: 15},
    {name:'vu' , age:54}
  ];
  constructor() { }

  ngOnInit() {
  }
  remoteDegisn(name: string) {
    const index = this.list.findIndex(e => e.name === name);
    this.list.splice(index,1);
  }
}
