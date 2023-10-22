import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent{

  arrayTop10: Array<string> = [];

  arrayNewGames: Array<string> = [];

  arrayPreVenda: Array<string> = [];

  constructor(){
    this.arrayTop10.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.arrayTop10.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.arrayTop10.push("../../assets/images/game-cards/c43634250d3be777a32ff55980ebe29889ad6cc4a337d3b5.avif")
    this.arrayTop10.push("../../assets/images/game-cards/ba00d855b4f9061f4f7c294506753f58bf33ac28453a8de4.avif")
    this.arrayTop10.push("../../assets/images/game-cards/424a72eeeeeb3d2354f58ca3718f19ad2e9e8e3c1405c2d5.avif")
    this.arrayTop10.push("../../assets/images/game-cards/JmxLZt6exeqcKRz7BSmK8aId.webp")
    this.arrayTop10.push("../../assets/images/game-cards/a8f7812fb2d0139ab7d0103ba945ef15708d30a626ffd5dc.avif")
    this.arrayTop10.push("../../assets/images/game-cards/K6mmm89oNII1iI1aqaClO0wh.webp")
    this.arrayTop10.push("../../assets/images/game-cards/337c8a46dbf1067ab041cd6791adeeee99ace2ebd996708a.avif")
    this.arrayTop10.push("../../assets/images/game-cards/icon0.jpeg")

    this.arrayNewGames.push("../../assets/images/game-cards/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/a8f7812fb2d0139ab7d0103ba945ef15708d30a626ffd5dc.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/424a72eeeeeb3d2354f58ca3718f19ad2e9e8e3c1405c2d5.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/phwiQjbJddEg979YucUoP3Vr.webp")
    this.arrayNewGames.push("../../assets/images/game-cards/9fb7d209dbb62357ddd5c305f6019a97238fc1bd1b540560.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/8c3ce3611a4bb187418bb5e24924a055ba33d3046a7aaacb.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/a63668c38fbe4c31f62d77a2863300dcf26c3e50576d75e2.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/6396317fce9c78dabacee5bdd34925d935cc20f15e4cbd7a.avif")
    this.arrayNewGames.push("../../assets/images/game-cards/cb28f9ee94352ddf4e7313c1a6b36e631c6730adfcdd7410.avif")

    this.arrayPreVenda.push("../../assets/images/pre-venda/dd78d0c35970e997c162b13f20d6a66f24afad1b4c47a482.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/2db31d90ad0b147e13a9e413fcaea9a64e8a26dfaf4c8299.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/c3daf3037feb797d9e71b81618e3b5ff3ff1f9609db5a4a2.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/4b674fbec219cb9a3d5b7bc1b3e3ca112fd59c8d492258ac.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/4a6fec7a330ed0237a704ac24ee80dab9c613b5302e0fe12.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/418704276d35ce02e8cb532c6ca3826cf866ad2ec66c0b17.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/8a27c829c09f8a02e0201e4c4a063bad5b44b3b8f76aa529.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/11d0dbc5e72685640d62c9848170615d220d91d690181b82.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/1a865c878f4291406951e112546e6b106d185d95b89307fe.avif")
    this.arrayPreVenda.push("../../assets/images/pre-venda/5ad543df09d0ee316118e18fe1d90023e36947f94ab82047.avif")

  }

}
