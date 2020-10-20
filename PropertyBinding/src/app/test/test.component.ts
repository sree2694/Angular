import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
<input [id] = "myId" type ="text" value ="Chinna">
<input id = "{{myId}} " type ="text" value ="Chinna">
<input [disabled] = "isDisabled" id ="{{myId}}" type ="text" value ="Chinna">
  `,
  styles: [ ]
})
export class TestComponent implements OnInit {

  public name = "Chinna";
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
