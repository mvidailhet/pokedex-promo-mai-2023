export type Gender = 'male' | 'female' | 'unknown';

export interface Pokemon {
  name: string;
  gender: Gender;
  level: number;
}
