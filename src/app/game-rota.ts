import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateGameComponent } from "./create-game/create-game.component";
import { GameDetailsComponent } from "./game-details/game-details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { GuardService } from "./guard/guard.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home' , component: HomeComponent},
  { path: 'cadastrogame' , component: CreateGameComponent, canActivate: [GuardService]},
  { path: 'game-detail/:id' , component: GameDetailsComponent },
  { path: 'login' , component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
