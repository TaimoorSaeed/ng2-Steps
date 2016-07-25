import { Component } from '@angular/core';
import { ChildOneComponent } from './childOne.component';
import { ChildTwoComponent } from './childTwo.component';

@Component({
  selector: 'page6',
  template: `<div>This is the Root App Component</div>
            <child-one></child-one>
            <child-two></child-two>
            `,
            directives: [ChildOneComponent, ChildTwoComponent]
})
export class Page6Component { 
  
  constructor(){
    
  }
}