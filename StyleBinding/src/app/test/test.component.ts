import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2 [style.color] ="hasError ? 'red' : 'green'>Style Binding</h2>
  <h2 [style.color]="highlightColor">StyleColor</h2>
    

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Chinna";
  public hasError = true;
  public isSpecial = true;
 public highlightColor ="orange";
  constructor() { }
 
  ngOnInit(): void {
  }

}
