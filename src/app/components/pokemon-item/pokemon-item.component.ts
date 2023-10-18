import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() pokemon?: Pokemon;
  @Output() delete = new EventEmitter<string>();

  onDeleteBtnClick() {
    if (!this.pokemon) return;
    this.delete.emit(this.pokemon.name);
  }

  ngOnInit(): void {
    if (!this.pokemon) return;
    console.log(`init pokemon ${ this.pokemon.name }`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    if (!this.pokemon) return;
    console.log(`destroy pokemon ${ this.pokemon.name }`);
  }
}
