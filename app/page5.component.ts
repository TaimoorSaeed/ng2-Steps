import { Component } from '@angular/core';
import { ChildOneComponent } from './childOne.Component';

@Component({
  selector: 'page5',
  template: `<div>This is the root app component</div>
  <child-one></child-one>`,

  directives: [ChildOneComponent]
})
export class Page5Component { }