import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  points: number = 0;
  tries: number = 3;
  highscore: number = 0;

  constructor() { 
    this.loadHighscore()
  }

  loadHighscore() {
    let highscore: any = (localStorage.getItem('guess-series-highscore'))
    let highscoreAsNumber = highscore * 1
    this.highscore = highscoreAsNumber;
  }

  resetGame() {
    this.tries = 3;
    this.points = 0;
  }

}

