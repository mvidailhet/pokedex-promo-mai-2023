export type Gender = 'male' | 'female' | 'unknown';

export type PkmnType = 'Feu' | 'Eau' | 'Plante' | 'Vol' | 'Poison' | 'Electric';


export interface LocalPokemon {
  name: string;
  gender: Gender;
  type: PkmnType;
  level: number;
}

export interface Pokemon extends LocalPokemon {
  id: string;
}
