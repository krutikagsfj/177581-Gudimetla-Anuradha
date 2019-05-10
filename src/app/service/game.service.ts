import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game-model';

@Injectable({
 providedIn: 'root'
})

export class GameService {
 constructor(private http:HttpClient) { }
 baseUrl:string='http://localhost:3000/game';

 getGames(){
  return this.http.get<Game[]>(this.baseUrl);
 }
}