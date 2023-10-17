import { Component } from '@angular/core';
import { Utils } from 'src/app/utils';

type Gender = 'male' | 'female' | 'unknown';

interface Pokemon {
  name: string;
  gender: Gender;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [
    './pokemon-list.component.scss'
  ],
})
export class PokemonListComponent {
  newPokemonName = '';

  genders: Gender[] = ['male', 'female', 'unknown'];
  genderColors = {
    male: 'blue',
    female: 'pink',
    unknown: 'purple',
  }

  pokemons: Pokemon[] = [{
    name: 'Pikachu',
    gender: 'male',
  }, {
    name: 'blulbizarre',
    gender: 'female',
  }];

  addPokemon() {
    const newPokemon: Pokemon = {
      name: this.newPokemonName,
      gender: this.getRandomGender(),
    };
    this.pokemons.unshift(newPokemon);
    this.newPokemonName = '';
  }

  getRandomGender() {
    const randomNumberGender = Utils.getRandomNumber(0, this.genders.length - 1);
    return this.genders[randomNumberGender];
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addPokemon();
    }
  }
}
