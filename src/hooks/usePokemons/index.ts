import { useQuery, UseQueryResult, UseBaseQueryOptions } from 'react-query'
import { gql } from 'graphql-request'

import client, { getPokemonPictureUrl } from '../../utils/api/client'

import type { PokemonType } from '../../types/pokemon'

type PokemonsResponse = {
  pokemons: { id: number, name: string }[]
}

const pokemonsQuery = gql`
query ($ids: [Int!]) {
  pokemons: pokemon_v2_pokemon(offset: 0, limit: 10, where: {id: {_in: $ids}}) {
    id
    name
  }
}
`

const fetch = async (ids: number[]): Promise<PokemonType[]> => {
  const { pokemons } = await client<PokemonsResponse, { ids: number[] }>(
    pokemonsQuery, { ids }
  )

  return pokemons.map((pokemon) => ({
    ...pokemon,
    picture: getPokemonPictureUrl(pokemon.id),
  }))
}

const query = (ids: number[], opts: UseBaseQueryOptions<PokemonType[]>):
  UseQueryResult<PokemonType[]> => useQuery('pokemonList', () => fetch(ids), opts)

export default query
