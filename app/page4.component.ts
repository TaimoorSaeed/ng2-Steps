import { Component } from '@angular/core';

@Component({
  selector: 'page4',
  template: `<br><input [value]="'Hello ' + name">`
})
export class Page4Component { 
   
    name: string;

    constructor(){
      this.name='TAMUR';
    }

}