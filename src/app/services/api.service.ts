import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { map } from 'rxjs';

interface PostResult {
  name: string;
}

export interface GetResult {
  [id: string]: Pokemon;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://pokedex-promo-mai-2023-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private httpClient: HttpClient) {}

  postPokemon(pokemon: Pokemon) {
    this.httpClient
      .post<PostResult>(`${this.apiUrl}/pokemons.json`, pokemon)
      .subscribe((res: PostResult) => {
        console.log(res);
      });
  }

  getPokemonsResult() {
    return this.httpClient.get<GetResult>(`${this.apiUrl}/pokemons.json`);
  }

  getPokemons() {
    return this.httpClient.get<GetResult>(`${this.apiUrl}/pokemons.json`)
    .pipe(
      map((getResult: GetResult) => {
        const ids = Object.keys(getResult);
        const pokemons: Pokemon[] = ids.map((id: string) => {
          return getResult[id];
        });
        return pokemons;
      })
    )
  }
}
