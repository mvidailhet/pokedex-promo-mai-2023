import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Gender } from "src/app/models/pokemon";
import { Utils } from "src/app/utils";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name?: string;
  @Input() level?: number;
  @Input() gender?: Gender;
  @Output() delete = new EventEmitter<string>();

  onDeleteBtnClick() {
    this.delete.emit(this.name);
  }
}
