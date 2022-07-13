import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario!: FormGroup;
  constructor(private fb: FormBuilder,private gameService: GameService,) {}
  ngOnInit(): void {
  this.usuario = this.fb?.group({
  email: ['',Validators.required],
  password: ['', Validators.required]
  })

  }
  // sendlogin(){
  //   console.log(this.usuario.value)
  // }
  sendlogin(){
    let usuario = {
      email: this.usuario.value.email,
      password: this.usuario.value.password,
    };
    this.gameService.getAuthorization(usuario)

  }


}
