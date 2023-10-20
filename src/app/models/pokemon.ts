export type Gender = 'male' | 'female' | 'unknown';

export type Type = {
  name: string;
  color: string;
}

export const pokemonTypes = [
  {
    name: 'normal',
    color: '#A0A2A0',
  },
  {
    name: 'combat',
    color: '#FF8100',
  },
  {
    name: 'vol',
    color: '#82BAEF',
  },
  {
    name: 'poison',
    color: '#923FCC',
  },
  {
    name: 'sol',
    color: '#92501B',
  },
  {
    name: 'roche',
    color: '#B0AA82',
  },
  {
    name: 'insecte',
    color: '#92A212',
  },
  {
    name: 'spectre',
    color: '#703F70',
  },
  {
    name: 'acier',
    color: '#60A2B9',
  },
  {
    name: 'plante',
    color: '#3DA224',
  },
  {
    name: 'feu',
    color: '#E72324',
  },
  {
    name: 'eau',
    color: '#2481EF',
  },
  {
    name: 'électrique',
    color: '#FAC100',
  },
  {
    name: 'plante',
    color: '#3DA224',
  },
  {
    name: 'psy',
    color: '#EF3F7A',
  },
  {
    name: 'glace',
    color: '#3DD9FF',
  },
]

export interface LocalPokemon {
  name: string;
  gender: Gender;
  level: number;
  types: Type[];
}

export interface Pokemon extends LocalPokemon {
  id: string;
}

