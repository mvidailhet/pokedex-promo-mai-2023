import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Utils } from "src/app/utils";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name = 'Pikachu';
  @Input() level = 1;
  @Output() delete = new EventEmitter<string>();

  gender: 'male' | 'female';

  constructor() {
    const randomNumber = Utils.getRandomNumber(1, 2);
    this.gender = randomNumber === 1 ? 'male' : 'female';
  }

  onDeleteBtnClick() {
    this.delete.emit(this.name);
  }
}
