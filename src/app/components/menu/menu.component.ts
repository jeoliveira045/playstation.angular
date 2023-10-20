import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuitems: Array<string> = ["Jogos", "Hardware", "Serviços", "Notícias", "Loja", "Suporte"];
  menustoreitems: Array<string> = ["Novidades"," Coleções","Ofertas", "PS5","Assinaturas","Navegar"];
  constructor(){

  }


}
