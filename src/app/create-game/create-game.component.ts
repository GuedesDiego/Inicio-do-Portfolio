import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GameGenresEnum } from '../enuns/gameGenresEnum';
import { GamePlatformsEnum } from '../enuns/gamePlatformsEnum';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent implements OnInit {
  constructor(private gameService: GameService,
              private fb: FormBuilder,
              private router: Router) {}

  formField!: FormGroup;
  optionsPlatforms = GamePlatformsEnum;

     genres = new FormControl('');
     platform = new FormControl('');
     bodyGame = {};

  ngOnInit(): void {
    this.mostrarGenresEnum();
    this.mostrarPlatformsEnum();
    this.formField = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
    });
    //this.gameService.getAuthorization().subscribe(a => console.log('Token',a));
    //this.createGame();
  }
  createGame(game: any) {
    this.gameService.addGame(game).subscribe(a=> a);
  }

  listaGamePlatformsEnum = GamePlatformsEnum;
  listaGameGenresEnum = GameGenresEnum;
  keysPlatforms: any;
  keysGenres: any;


  createGameForm() {
    this.bodyGame = {
      title: this.formField?.value.title,
      description: this.formField?.value.description,
      genres: this.genres?.value,
      tags: this.converteStringArray(this.formField.value.tags),
      platforms: this.platform.value,
    };

    this.createGame(this.bodyGame);
    this.router.navigate(['/home'])

  }

  mostrarPlatformsEnum() {
    this.keysPlatforms = Object.keys(this.listaGamePlatformsEnum).filter(
      String
    );
  }

  mostrarGenresEnum() {
    this.keysGenres = Object.keys(this.listaGameGenresEnum).filter(String);
  }

  converteStringArray(tags: any){
    const array = tags.split(" ");
    return array;
  }



}
