import { Injectable } from '@angular/core';
import { Gender, Pokemon } from '../models/pokemon';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
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

  getRandomGender() {
    const randomNumberGender = Utils.getRandomNumber(
      0,
      this.genders.length - 1
    );
    return this.genders[randomNumberGender];
  }

  addPokemon(newPokemonName: string) {
    if (this.pokemonAlreadyExists(newPokemonName)) {
      return null;
    }

    console.log('adding pokemon' + newPokemonName);

    const newPokemon: Pokemon = {
      name: newPokemonName,
      gender: this.getRandomGender(),
      level: Utils.getRandomNumber(1, 5),
    };
    this.pokemons = [newPokemon, ...this.pokemons];
    this.storePokemonsInLocalStorage();

    return newPokemon;
  }

  deletePokemon(indexToDelete: number) {
    this.pokemons.splice(indexToDelete, 1);
    this.storePokemonsInLocalStorage();
  }


}
