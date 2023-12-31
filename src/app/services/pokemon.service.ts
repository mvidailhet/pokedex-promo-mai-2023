import { Injectable } from '@angular/core';
import { Gender, LocalPokemon, Pokemon, Type, pokemonTypes } from '../models/pokemon';
import { Utils } from '../utils';
import { ApiService, GetResult, PostResult } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  genders: Gender[] = ['male', 'female', 'unknown'];

  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {
    this.loadPokemonsFromAPI();
    //this.loadPokemonsResultFromAPI();
  }

  loadPokemonsResultFromAPI() {
    this.apiService.getPokemonsResult()
    .subscribe((getResult: GetResult) => {
      const ids = Object.keys(getResult);
      this.pokemons = ids.map((id: string) => {
        return { ...getResult[id], id: id };
      });
    });
  }

  loadPokemonsFromAPI() {
    this.apiService.getPokemons()
    .subscribe((apiPokemons: Pokemon[]) => {
      this.pokemons = apiPokemons;
      console.log(this.pokemons);
    });
  }

  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName.toLowerCase() === pokemon.name.toLowerCase();
    });
    return pokemonWithSameName !== undefined;
  }

  getRandomGender() {
    const randomNumberGender = Utils.getRandomNumber(
      0,
      this.genders.length - 1
    );
    return this.genders[randomNumberGender];
  }

  getRandomType() {
    const randomNumberType = Utils.getRandomNumber(0, pokemonTypes.length - 1);
    return pokemonTypes[randomNumberType];
  }

  addPokemon(newPokemonName: string, pokemonTypeNames: string[]) {
    if (this.pokemonAlreadyExists(newPokemonName)) {
      return null;
    }

    const newPokemonTypes = pokemonTypeNames.map((pokemonTypeName: string) => {
      const type = pokemonTypes.find((type) => {
        return type.name === pokemonTypeName;
      });
      return type;
    }).filter((type: Type | undefined) => {
      return type !== undefined
    }) as Type[];

    const newPokemon: LocalPokemon = {
      name: newPokemonName,
      gender: this.getRandomGender(),
      level: Utils.getRandomNumber(1, 5),
      types: newPokemonTypes,
    };

    this.apiService.postPokemon(newPokemon)
    .subscribe((postResult: PostResult) => {
      const idNewPokemon = postResult.name;
      const newPokemonWithId: Pokemon = { ...newPokemon, id: idNewPokemon };
      this.pokemons = [newPokemonWithId, ...this.pokemons];
    });

    return newPokemon;
  }

  deletePokemon(indexToDelete: number) {
    this.apiService.deletePokemon(this.pokemons[indexToDelete].id).subscribe();
    this.pokemons.splice(indexToDelete, 1);
  }
}
