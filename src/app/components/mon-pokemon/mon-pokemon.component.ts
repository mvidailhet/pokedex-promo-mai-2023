import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-pokemon',
  templateUrl: './mon-pokemon.component.html',
  styleUrls: ['./mon-pokemon.component.scss'],
})
export class MonPokemon {
  pokemons = [
    {
      name: 'Bulbizarre',
      type: 'plante',
    },
    {
      name: 'Salamèche',
      type: 'feu',
    },
    {
      name: 'carapuce',
      type: 'eau',
    },
    {
      name: 'Roucool',
      type: 'vol',
    },
    {
      name: 'Mélofée',
      type: 'fée',
    },
  ];

  isButtonDisabled = false;

  pokemon = this.getRandomPkmn();

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomPkmn() {
    const randomnumber = this.random(0, this.pokemons.length - 1);
    console.log(randomnumber);
    return this.pokemons[randomnumber];
  }

  generateRandomPkmn() {
    this.pokemon = this.getRandomPkmn();
    this.isButtonDisabled = true;
  }

}
