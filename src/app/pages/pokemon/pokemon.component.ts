import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  pokemon?: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.setCurrentPokemon();
  }

  setCurrentPokemon() {
    const pokemonName: string = this.activatedRoute.snapshot.params['name'];

    if (this.pokemonService.pokemons.length === 0) {
      setTimeout(() => {
        this.setCurrentPokemon();
      }, 100);
      return;
    }

    const pokemon = this.pokemonService.pokemons.find((pokemon: Pokemon) => {
      return pokemon.name.toLowerCase() === pokemonName;
    });

    if (!pokemon) {
      console.error("Euh... J'ai pas trouvé ton Pokémon, gros");
      return;
    }

    this.pokemon = pokemon;
  }
}
