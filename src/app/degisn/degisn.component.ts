import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-degisn',
  templateUrl: './degisn.component.html',
  styleUrls: ['./degisn.component.css']
})
export class DegisnComponent implements OnInit {
@Input() name: string;
@Input() age: number;
  @Output() remoteDegisn1 = new EventEmitter<string>()


  constructor() { }

  ngOnInit() {
  }

  remoteByClick() {
    this.remoteDegisn1.emit(this.name);}
}
