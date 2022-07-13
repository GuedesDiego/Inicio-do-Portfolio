import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listaGame: any;
  game: any;

  constructor(private gameServe: GameService, private router: Router) {
    this.getGameList()
  }
  getGameList() {
    this.gameServe.getGameList().subscribe(game => this.transformaJsomObjeto(game) );
  }

  transformaJsomObjeto(json: any){
    this.listaGame =  json.games;
  }
  getGameById(id: any) {
    this.gameServe.getNameById(id).subscribe(game1 => this.game=  game1);
    this.router.navigate(['/game-detail',id])
  }
  images = [
    {
      imageSrc:
        'https://media.sirusgaming.com/wp-content/uploads/2022/05/call-of-duty-modern-warfare-ii-01-770x437.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/vanguard/seasons/season-4/battlepass/Battle_Pass_Desktop.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://i0.wp.com/gamehall.com.br/wp-content/uploads/2013/11/call-of-duty-ghosts-gold-edition-ps3-psn-midia-digital-pt-br-491301-MLB20289037495_042015-F.jpg?ssl=1',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://scontent.fcgh9-1.fna.fbcdn.net/v/t31.18172-8/1506337_640227266037297_1044027969_o.png?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeGCkg-6TGL1w8uriApz8NA5C8niogV9QaoLyeKiBX1BqkRXQVVeMb5btYHTYi7e5UmfyiD0-FyOIJY5Grb6nqub&_nc_ohc=DtSLlDlF0FsAX8lLCVQ&_nc_ht=scontent.fcgh9-1.fna&oh=00_AT963WmdGFl_ymyp7r5Q3buvcG-XG_mojvs5tHPdpoklIw&oe=62F16B02',
      imageAlt: 'person2',
    },
  ]

  excluirGame(id:any){
    this.gameServe.deleteGame(id).subscribe(game => game);
    this.router.navigate(['/home'])
  }

}
