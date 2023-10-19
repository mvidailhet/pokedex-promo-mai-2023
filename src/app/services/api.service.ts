import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PostResult {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  postPokemon() {
    this.httpClient
      .post<PostResult>(
        'https://pokedex-promo-mai-2023-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json',
        {
          name: 'test',
          gender: 'male',
        }
      )
      .subscribe((res: PostResult) => {
        console.log(res);
      });
  }
}
