import { Component } from '@angular/core';
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
        left: '-48rem'
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

  leftRight: boolean = true;

  leftButton: boolean = false;

  rightButton: boolean = true;

  imagesArray: Array<string> = [];

  imagesGameCardArray: Array<string> = [];

  transition: {[klass:string]:any} = {'transform': 'translateX(100%)','transition': 'transform 1s ease'};

  constructor(){
    this.imagesArray.push("../../assets/images/2d37a11a-bd40-4a2f-995a-4557571f1368.avif")
    this.imagesArray.push("../../assets/images/783d121d-34aa-4ea5-8711-33491d50df02.avif")
    this.imagesArray.push("../../assets/images/ac6634fd-f8a4-4f12-bdde-3109305375e4.avif")
    this.imagesArray.push("../../assets/images/d6c0532c-2962-49a2-89a0-6bad425b7b9a.avif")
    this.imagesArray.push("../../assets/images/6ab1ae5a-e16b-428a-8932-ad314d02fc47.avif")
    this.imagesArray.push("../../assets/images/7db030a8-7ef6-4eed-9865-62e210332c46.avif")

    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/c43634250d3be777a32ff55980ebe29889ad6cc4a337d3b5.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/ba00d855b4f9061f4f7c294506753f58bf33ac28453a8de4.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/424a72eeeeeb3d2354f58ca3718f19ad2e9e8e3c1405c2d5.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/JmxLZt6exeqcKRz7BSmK8aId.webp")
    this.imagesGameCardArray.push("../../assets/images/game-cards/a8f7812fb2d0139ab7d0103ba945ef15708d30a626ffd5dc.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/K6mmm89oNII1iI1aqaClO0wh.webp")
    this.imagesGameCardArray.push("../../assets/images/game-cards/337c8a46dbf1067ab041cd6791adeeee99ace2ebd996708a.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/icon0.jpeg")

  }

  GameCardListTransitionOnClick(): void{
    this.leftButton = !this.leftButton
    console.log(this.leftButton)
    this.rightButton = !this.rightButton
    console.log(this.rightButton)
    this.leftRight = !this.leftRight
  }




}
