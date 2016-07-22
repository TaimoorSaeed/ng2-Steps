import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <a [routerLink]="['/page1']">First</a>
              <a [routerLink]="['/page2']">Second</a>
              <a [routerLink]="['/page3']">Third</a>
              <a [routerLink]="['/page4']">Fourth</a>
              <a [routerLink]="['/page5']">Fifth</a>
              <a [routerLink]="['/page6']">Sixth</a>
              <a [routerLink]="['/page7']">Seventh</a>
              <a [routerLink]="['/page8']">Eight</a>
              <a [routerLink]="['/page9']">Nineth</a>
              <a [routerLink]="['/page10']">Tenth</a>
              <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  title: string;

  constructor(){
    this.title = "Angular2 Baby Steps";
  }
}