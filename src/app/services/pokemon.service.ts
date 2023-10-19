import { Injectable } from '@angular/core';
import { Gender, Pokemon } from '../models/pokemon';
import { Utils } from '../utils';
import { ApiService } from './api.service';
import { map } from 'rxjs';

interface PokemonsRes {
  [id: string]: Pokemon;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  genders: Gender[] = ['male', 'female', 'unknown'];

  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {
    this.loadPokemonsFromStorage();

    this.apiService.getPokemons()
    .pipe(
      map((res: any) => {
        return res;
      })
    )
    .subscribe((res: any) => {
      console.log(res);
    });

  }

  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName.toLowerCase() === pokemon.name.toLowerCase();
    });
    return pokemonWithSameName !== undefined;
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

    const newPokemon: Pokemon = {
      name: newPokemonName,
      gender: this.getRandomGender(),
      level: Utils.getRandomNumber(1, 5),
    };
    this.pokemons = [newPokemon, ...this.pokemons];

    this.apiService.postPokemon(newPokemon);

    return newPokemon;
  }

  deletePokemon(indexToDelete: number) {
    this.pokemons.splice(indexToDelete, 1);
  }


}
