import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import client, { getPokemonPictureUrl } from '../../../utils/api/client'

import type { PokemonType } from '../../../types/pokemon'

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
    picture: getPokemonPictureUrl(pokemon.id),
  }))
}

const query = (): UseQueryResult<PokemonType[]> =>
  useQuery('pokemonList', fetch)

export default query
