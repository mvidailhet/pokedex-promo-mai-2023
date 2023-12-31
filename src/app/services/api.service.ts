import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalPokemon, Pokemon, Type, pokemonTypes } from '../models/pokemon';
import { delay, map } from 'rxjs';

export interface PostResult {
  name: string;
}

export interface GetResult {
  [id: string]: LocalPokemon;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://pokedex-promo-mai-2023-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private httpClient: HttpClient) {

  }

  postPokemon(pokemon: LocalPokemon) {
    return this.httpClient
      .post<PostResult>(`${this.apiUrl}/pokemons.json`, pokemon);
  }

  postType(type: Type) {
    return this.httpClient
      .post<PostResult>(`${this.apiUrl}/types.json`, type);
  }

  getPokemonsResult() {
    return this.httpClient.get<GetResult>(`${this.apiUrl}/pokemons.json`);
  }

  getPokemons() {
    return this.httpClient.get<GetResult>(`${this.apiUrl}/pokemons.json`)
    .pipe(
      map((getResult: GetResult | null) => {
        if (getResult === null) return [];
        const ids = Object.keys(getResult);
        const pokemons: Pokemon[] = ids.map((id: string) => {
          const currentPokemon: LocalPokemon = getResult[id];
          return { ...currentPokemon, id: id };
        });
        return pokemons;
      })
    )
  }

  deletePokemon(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/pokemons/${id}.json`);
  }
}
