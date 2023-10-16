import { Component } from '@angular/core';

interface Type {
  name: string;
  color: string;
}

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss'],
})
export class MyPokemonComponent {
  types: Type[] = [
    {
      name: 'plante',
      color: 'green',
    },
    {
      name: 'feu',
      color: 'red',
    },
    {
      name: 'eau',
      color: 'blue',
    },
    {
      name: 'insecte',
      color: 'brown',
    }
  ];

  names = ['carapuce', 'dracaufeu', 'bulbizarre'];

  name = 'bulbizarre';
  type = this.getRandomType();

  isButtonDisabled = false;

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  changeName() {
    const randomNumberName = this.getRandomNumber(0, this.names.length - 1);
    this.name = this.names[randomNumberName];
    this.isButtonDisabled = true;
  }

  getRandomType() {
    const randomNumberType = this.getRandomNumber(0, this.types.length - 1);
    return this.types[randomNumberType];
  }
}
