import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import client from '../../../utils/api/client'

import type { Pokemon } from '../../../types/pokemon'

type PokemonsResponse = {
  pokemons: { id: number, name: string }[]
}

const pokemonsQuery = gql`
query {
  pokemons: pokemon_v2_pokemon(offset: 0, limit: 10) {
    id
    name
  }
}
`

const fetch = async () => {
  const { pokemons } = await client<PokemonsResponse>(pokemonsQuery)

  return pokemons.map(pokemon => ({
    ...pokemon,
    picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }))
}

const query = (): UseQueryResult<Pokemon[]> => useQuery('pokemonList', fetch)

export default query
