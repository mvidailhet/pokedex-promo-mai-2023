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

}
