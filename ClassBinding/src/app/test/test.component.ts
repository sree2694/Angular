import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2 class ="text-success">Angular</h2>
  <h2 [class] ="successClass">Angular</h2>
    
<h2 class ="text-special" [class] = "successClass">Angular</h2>
<h2 [class.text-danger] ="hasError">Angular</h2>

<h2 [ngClass] ="messageClasses">Angular</h2>

  `,
  styles: [ `
  .text-success {
    color : green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Chinna";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }
 
  ngOnInit(): void {
  }

}
