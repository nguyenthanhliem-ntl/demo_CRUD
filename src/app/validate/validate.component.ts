import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
onSubmit(formSignIn) {
  console.log(formSignIn);

}
onSub(formSignIn) {
  alert(formSignIn)

}
  constructor() { }

  ngOnInit() {
  }

}
