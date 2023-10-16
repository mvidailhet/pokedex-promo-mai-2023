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

  isSayingBonjour = false;

  onToggleBtnCLick() {
    this.isSayingBonjour = !this.isSayingBonjour;
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    console.log(inputElt.value);
    this.title = inputElt.value;
  }

}
