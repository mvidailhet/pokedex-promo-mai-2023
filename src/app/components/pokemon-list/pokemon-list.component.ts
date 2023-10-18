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

  addedPokemon = '';
  duplicatePokemon = '';

  genders: Gender[] = ['male', 'female', 'unknown'];

  pokemons: Pokemon[] = [];

  constructor() {
    this.loadPokemonsFromStorage();
  }

  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName.toLowerCase() === pokemon.name.toLowerCase();
    });
    return pokemonWithSameName !== undefined;
  }

  storePokemonsInLocalStorage() {
    const pokemonsJson = JSON.stringify(this.pokemons);
    localStorage.setItem('pokemons', pokemonsJson);
  }

  loadPokemonsFromStorage() {
    const pokemonsStr = localStorage.getItem('pokemons');
    if (pokemonsStr === null) return;
    this.pokemons = JSON.parse(pokemonsStr);
  }

  addPokemon() {
    if (this.pokemonAlreadyExists(this.newPokemonName)) {
      this.duplicatePokemon = this.newPokemonName;
      this.closeToastAfterSomeTime();
      return;
    }

    const newPokemon: Pokemon = {
      name: this.newPokemonName,
      gender: this.getRandomGender(),
    };
    this.pokemons.unshift(newPokemon);
    this.addedPokemon = this.newPokemonName;
    this.newPokemonName = '';
    this.closeToastAfterSomeTime();

    this.storePokemonsInLocalStorage();
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

  closeToastAfterSomeTime() {
    setTimeout(() => {
      this.onToastClose();
    }, 2000);
  }

  onToastClose() {
    this.addedPokemon = '';
    this.duplicatePokemon = '';
  }

  onDeletePokemon(pokemonIndexToDelete: number) {
    this.pokemons.splice(pokemonIndexToDelete, 1);
    this.storePokemonsInLocalStorage();
  }
}
