import { Injectable } from '@angular/core';
import {RollData} from "./roll-data";

@Injectable({
  providedIn: 'root'
})
export class RollerService {

  private getRandomDiceValue(): number {
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

  constructor() { }
}
