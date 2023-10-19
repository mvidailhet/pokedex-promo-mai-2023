import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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

  constructor(
    public pokemonService: PokemonService,
    private apiService: ApiService
  ) {
    this.pokemonService.loadPokemonsFromStorage();

    //this.apiService.postPokemon();
  }

  addPokemon() {
    const addedPokemon = this.pokemonService.addPokemon(this.newPokemonName);
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
