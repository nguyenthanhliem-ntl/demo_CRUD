import { Component, OnInit } from '@angular/core';
import {Test} from "../test";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  fontSize = 14;
test: Test = {
  li: 'lo',
  status: true

} ;
constructor() { }

  ngOnInit() {
  }


  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }


  onStatus() {
   this.test.status = !this.test.status;
  }
}
