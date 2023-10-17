import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [
    './pokemon-list.component.scss'
  ],
})
export class PokemonListComponent {
  newPokemonName = '';

  pokemons: string[] = [];

  addPokemon() {
    this.pokemons.unshift(this.newPokemonName);
    this.newPokemonName = '';
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addPokemon();
    }
  }
}
