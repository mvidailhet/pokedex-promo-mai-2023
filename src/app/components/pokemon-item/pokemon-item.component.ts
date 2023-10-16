import { Component } from "@angular/core";
import { Utils } from "src/app/utils";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  name = 'Pikachu';
  level = 1;

  gender: 'male' | 'female';

  constructor() {
    const randomNumber = Utils.getRandomNumber(1, 2);
    this.gender = randomNumber === 1 ? 'male' : 'female';
  }
}
