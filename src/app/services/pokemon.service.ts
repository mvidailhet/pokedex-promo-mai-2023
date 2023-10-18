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
      //this.duplicatePokemon = newPokemonName;
      //this.closeToastAfterSomeTime();
      return;
    }

    console.log('adding pokemon' + newPokemonName);

    const newPokemon: Pokemon = {
      name: newPokemonName,
      gender: this.getRandomGender(),
      level: Utils.getRandomNumber(1, 5),
    };
    this.pokemons = [newPokemon, ...this.pokemons];
/*     this.addedPokemon = this.newPokemonName;
    this.newPokemonName = '';
    this.closeToastAfterSomeTime();
 */
    this.storePokemonsInLocalStorage();
  }

  deletePokemon(indexToDelete: number) {
    this.pokemons.splice(indexToDelete, 1);
    this.storePokemonsInLocalStorage();
  }


}
