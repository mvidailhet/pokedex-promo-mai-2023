import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [
    './pokemon-list.component.scss'
  ],
})
export class PokemonListComponent {
  title = 'toto';

  newPkmnName = '';
  newPkmnType = '';
  pkmnHasBeenAdded = false;
  pkmnAlreadyExist = false;

  isSayingBonjour = false;

  pokemons = [
    {
      name: 'Bulbizarre',
      type: 'plante',
    },
    {
      name: 'Salamèche',
      type: 'feu',
    },
    {
      name: 'carapuce',
      type: 'eau',
    },
    {
      name: 'Roucool',
      type: 'vol',
    },
    {
      name: 'Mélofée',
      type: 'fée',
    },
  ];

  onToggleBtnCLick() {
    this.isSayingBonjour = !this.isSayingBonjour;
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    console.log(inputElt.value);
    this.title = inputElt.value;
  }

  addPkmn(){
    const pkmnAlreadyExist = this.pkmnAlreadyExiste()
    if(pkmnAlreadyExist){
      this.pkmnAlreadyExist = true;
      return ;
    }
    this.pokemons.unshift({
      name: this.newPkmnName,
      type: this.newPkmnType,
    })
    this.pkmnHasBeenAdded = true;
  }
  onInputKeyPress(event: KeyboardEvent) {
    console.log(event.code);
    if(event.code === 'Enter'){
      this.addPkmn();
    }
  }
  closeToast(){
    this.pkmnHasBeenAdded = false;
    this.pkmnAlreadyExist = false;
  }

  pkmnAlreadyExiste(){
    let pkmnAlreadyExist = false;
    this.pokemons.forEach(pokemon => {
      if (this.newPkmnName === pokemon.name){
        pkmnAlreadyExist = true;
      }
    })
    return pkmnAlreadyExist;
 }

}
