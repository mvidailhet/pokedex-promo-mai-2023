import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

interface PostResult {
  name: string;
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

  getPokemons() {
    return this.httpClient.get(`${this.apiUrl}/pokemons.json`);
  }
}
