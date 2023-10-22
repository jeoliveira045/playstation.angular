import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('leftRight', [
      state('right', style({
        left: '-67%'
      })),
      state('left', style({
        left: '0rem'
      })),
      transition('left <=> right', [
        animate('1s')
      ])
    ])
  ]
})
export class GamesComponent {

  @Input() gametitle: string = '';

  @Input() gameArray: Array<string> = []; 

  leftRight: boolean = true;

  leftButton: boolean = false;

  rightButton: boolean = true;

  imagesGameCardArray: Array<string> = [];

  constructor(){

  }

  GameCardListTransitionOnClick(): void{
    this.leftButton = !this.leftButton
    console.log(this.leftButton)
    this.rightButton = !this.rightButton
    console.log(this.rightButton)
    this.leftRight = !this.leftRight
  }




}
