import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
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
    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.imagesGameCardArray.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")

  }

  GameCardListTransitionOnClick(): void{
    // this.transition = 
  }
}
