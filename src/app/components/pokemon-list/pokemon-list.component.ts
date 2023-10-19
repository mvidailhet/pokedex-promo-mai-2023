import { Component } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName = '';

  addedPokemon = '';
  duplicatePokemon = '';

  pokemons = this.pokemonService.pokemons;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonService.loadPokemonsFromStorage();
  }

  addPokemon() {
    this.pokemonService.addPokemon(this.newPokemonName);
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.pokemonService.addPokemon(this.newPokemonName);
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

  onPokemonItemDelete(indexToDelete: number) {
    this.pokemonService.deletePokemon(indexToDelete);
  }
}
