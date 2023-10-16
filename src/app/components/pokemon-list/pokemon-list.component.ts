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
    this.toggleButtonDisabled();
  }

  toggleButtonDisabled() {
    setTimeout(() => {

      this.isButtonDisabled = !this.isButtonDisabled;

      this.toggleButtonDisabled();
    }, 3000);
  }

}
