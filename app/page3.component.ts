import { Component } from '@angular/core';

@Component({
  selector: 'page3',
  template: `<h2>COUNTER</h2><div>{{counter}}</div><br>
          <button (click)="addCounter()">PushMeToAdd</button>`
})
export class Page3Component { 
counter: number;

constructor(){
    this.counter=0;
}

addCounter(): void { 
  this.counter++;
}

}