export type Gender = 'male' | 'female' | 'unknown';


export interface LocalPokemon {
  name: string;
  gender: Gender;
  level: number;
}

export interface Pokemon extends LocalPokemon {
  id: string;
}
