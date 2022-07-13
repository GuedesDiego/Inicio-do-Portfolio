import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../service/game.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private serviceAuth: GameService, private router: Router ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if(this.serviceAuth.usuariologado){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
