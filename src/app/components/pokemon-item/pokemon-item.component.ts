import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit, OnDestroy {
  private _pokemon?: Pokemon | undefined;

  @Input()
  public get pokemon(): Pokemon | undefined {
    return this._pokemon;
  }

  public set pokemon(value: Pokemon | undefined) {
    this._pokemon = value;
    console.log('setting pokemon');
  }


  @Output() delete = new EventEmitter<string>();

  onDeleteBtnClick() {
    if (!this.pokemon) return;
    this.delete.emit(this.pokemon.name);
  }

  ngOnInit(): void {
    if (!this.pokemon) return;
    console.log(`init pokemon ${ this.pokemon.name }`);
  }

  ngOnDestroy(): void {
    if (!this.pokemon) return;
    console.log(`destroy pokemon ${ this.pokemon.name }`);
  }
}
