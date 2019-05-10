import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GameService } from '../service/game.service';
import { Game } from '../model/game-model';



@Component({
 selector: 'app-play',
 templateUrl: './play.component.html',
 styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
 games :Game[];
 amount:any;
 constructor(private router: Router , private gameService:GameService) { }
 ngOnInit() {
  //ammt:Number;
  this.gameService.getGames().subscribe(data=>{this.games=data});
  let ammt=localStorage.getItem("amt");
  this.amount=ammt.toString();
  this.amount=this.amount-100;
  console.log(this.amount);
 }
}

