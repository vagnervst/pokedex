export enum PokemonStats {
  HP = 'hp',
  Attack = 'attack',
  Defense = 'defense',
  SpecialAttack = 'special-attack',
  SpecialDefense = 'special-defense',
  Speed = 'speed',
}

export type PokemonTypes =
  'normal' | 'fire' | 'fighting' | 'water' |
  'flying' |'grass' | 'poison' | 'electric' |
  'ground' | 'psychic' | 'rock' | 'ice' | 'bug' |
  'dragon' | 'ghost' | 'dark' | 'steel' | 'fairy'

export type Stat = {
  value: number,
  stat: { name: PokemonStats },
}

export type Type = {
  slot: number,
  type: { name: PokemonTypes },
}

export type Pokemon = {
  id: number,
  name: string,
  picture: string,
  types: Type[],
  stats: Stat[],
}
