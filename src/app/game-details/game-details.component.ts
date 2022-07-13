import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(private gameService: GameService,private router: ActivatedRoute) { }
  gameId = this.router.params;

  id: any;
  game: any;
  ngOnInit(): void {
    this.carregaDetails()
  }
  carregaDetails(){
        if(this.gameId){
          this.gameId.subscribe(a => this.id = a)
          this.gameService.getNameById(this.id.id).subscribe(game => this.transformaJsomObjeto(game))
        }
  }

  transformaJsomObjeto(json: any){
    this.game =  json.game;
  }
  votar(){
this.gameService.votar()
  }


}
