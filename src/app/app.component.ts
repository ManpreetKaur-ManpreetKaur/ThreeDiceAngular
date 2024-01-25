import { Component } from '@angular/core';
import {RollData} from "./roll-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rollData: RollData;

  constructor(){
    this.rollData = this.getRollData(3);
  }

  onRollDice(){
    this.rollData = this.getRollData(3);
  }

  getRandomDiceValue(){
  return 1 + Math.floor(6*Math.random());
  }

  getRollData(numberOfDice: number): RollData {
    const values = [];
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
      let diceValue = this.getRandomDiceValue()
      values.push(diceValue);
      total += diceValue;
    }
    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    }

  }
}
