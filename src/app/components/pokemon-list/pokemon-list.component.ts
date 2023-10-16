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

  isButtonDisabled = false;

  constructor() {
  }

  toggleButtonDisabled() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  onDisableBtnCLick() {
    this.toggleButtonDisabled();
  }

  onInputChange(event: Event) {
    //console.log(event);
    const inputElt = event.target as HTMLInputElement;
    console.log(inputElt.value);

    this.title = inputElt.value;
    //console.log(event.target.value);

  }

}
