import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  status: any;
  usuariologado = false;

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJiMzgwZDQ5NDUzNzUwYWJkY2EyN2I5IiwiaWF0IjoxNjU2MDc3MzM2fQ._EIr81U0BQfZ5SgcR9XbVFC_N1Q6YTJ1KKrxc0itxJQ'
    })
  };
  option = {
    email: 'master@tindin.com.br',
    password: '123',
  };
  constructor(private gameServe: HttpClient, private router: Router) {}

  getAuthorization(usuario:any) {
    new Observable((subscriber) => {
     this.gameServe.post(
      'https://api-labs.tindin.com.br/auth',
      usuario
      ).subscribe(res => subscriber.next(res),
                 err  => subscriber.next(err))
     }).subscribe(a => this.pegaStatus(a));
  }


  pegaStatus(status: any){
     this.status = status
     if(status.token){
      this.usuariologado = true;
      this.router.navigate(['/cadastrogame'])
     }else{
      this.usuariologado = false;
      this.router.navigate(['/home'])
     }
  }


  getGameList() :Observable<any>{
    return this.gameServe.get('https://api-labs.tindin.com.br/games');
  }

  getNameById(id: string):Observable<any> {
    return this.gameServe.get(
      `https://api-labs.tindin.com.br/games/${id}`
    );
  }

  addGame(body: any):Observable<any> {

    return new Observable((subscriber) => {
      this.gameServe.post<any>('https://api-labs.tindin.com.br/games', body, this.httpOptions )
      .subscribe((res) => subscriber.next(res),
      (err) => subscriber.error(err));
    })
  }

  deleteGame(id: any):Observable<any>{
    return this.gameServe.delete(
      `https://api-labs.tindin.com.br/games/${id}`,this.httpOptions
    );
  }
  objeto = {
    "gameId": "string",
    "rate": 0
  }
  votar(){
    return this.gameServe.post(`https://api-labs.tindin.com.br/games/rate`,this.objeto,this.httpOptions)
  }

}
