import {Component} from '@angular/core';

@Component({
    selector: 'page2',
    template: `<h1>Team Players</h1>
    <ul>
       <li *ngFor="let i of players">{{i}}</li>
    </ul>`
})
export class Page2Component { 
    players: string[];

    constructor() {
        this.players = ['Misbah', 'Amir', 'Younis', 'Yasir','Misbah', 'Amir', 'Younis', 'Yasir']];
    }
}