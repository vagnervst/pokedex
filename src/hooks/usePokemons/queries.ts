import { gql } from 'graphql-request'

const PokemonInfo = gql`
fragment PokemonInfo on pokemon_v2_pokemon {
  id
  name
  specy: pokemon_v2_pokemonspecy {
    names: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
      name
    }
  }
  types: pokemon_v2_pokemontypes {
    slot
    type: pokemon_v2_type {
      name
    }
  },
  stats: pokemon_v2_pokemonstats {
    value: base_stat
    stat: pokemon_v2_stat {
      name
    }
  }
}
`

export type pokemonsByIdVariables = {
  offset: number, limit: number, ids: number[],
}

export const pokemonsById = gql`
${PokemonInfo}

query ($offset:  Int!, $limit: Int!, $ids: [Int!]) {
  pokemons: pokemon_v2_pokemon(
    offset: $offset,
    limit: $limit,
    where: { id: { _in: $ids } }
  ) {
    ...PokemonInfo
  }
}
`

export type pokemonsByNameVariables = {
  offset: number, limit: number, name: string,
}

export const pokemonsByName = gql`
${PokemonInfo}

query ($offset: Int!, $limit: Int!, $name: String!) {
  pokemons: pokemon_v2_pokemon(
    offset: $offset,
    limit: $limit,
    where: { name: { _regex: $name } }
  ) {
    ...PokemonInfo
  }
}
`

export const pokemonByPk = gql`
${PokemonInfo}

query($id: Int!) {
  pokemon: pokemon_v2_pokemon(id: $id) {
    ...PokemonInfo
  }
}
`
