import { Component } from '@angular/core';
import { pokemonTypes } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName = '';

  newPokemonType = '';

  pokemonTypes = pokemonTypes;

  addedPokemon = '';
  duplicatePokemon = '';

  constructor(
    public pokemonService: PokemonService,
  ) {
  }

  addPokemon() {
    const addedPokemon = this.pokemonService.addPokemon(this.newPokemonName, [this.newPokemonType]);
    if (addedPokemon) {
      this.addedPokemon = this.newPokemonName;
    } else {
      this.duplicatePokemon = this.newPokemonName;
    }
    this.newPokemonName = '';
    this.closeToastAfterSomeTime();
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.pokemonService.addPokemon(this.newPokemonName, [this.newPokemonType]);
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
