import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { } from 'angular/ti'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GameControlComponent implements OnInit {

  public contador: any;
  public tempo: number = 0;

  public oddNumbers = [];
  public evenNumbers = [];

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.contador = setInterval(() =>{
      this.tempo += 1;
      if(this.tempo % 2 == 1){
        this.oddNumbers.push({
          number: this.tempo
        })
      } else {
        this.evenNumbers.push({
          number: this.tempo
        })
      }
    }, 1000);
  }

  stopGame(){
    clearInterval(this.contador);
  }
}
