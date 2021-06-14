export enum PokemonStats {
  HP = 'hp',
  Attack = 'attack',
  Defense = 'defense',
  SpecialAttack = 'special-attack',
  SpecialDefense = 'special-defense',
  Speed = 'speed',
}

type Stat = {
  value: number,
  stat: {
    name: PokemonStats
  },
}

type Type = {
  slot: number,
  type: { name: string },
}

export type PokemonType = {
  id: number,
  name: string,
  picture: string,
}

export type PokemonDetails = PokemonType & {
  types: Type[],
  stats: Stat[],
}
