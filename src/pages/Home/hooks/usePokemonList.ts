import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import client, { getPokemonPictureUrl } from '../../../utils/api/client'

import type { PokemonType } from '../../../types/pokemon'

type PokemonsResponse = {
  pokemons: { id: number, name: string }[]
}

type FetchResult = {
  offset: number,
  data: PokemonType[],
}

type QueryParams = {
  offset: number,
  name: string,
  limit: number,
}

const pokemonsQuery = gql`
query ($offset: Int!, $limit: Int!, $name: String!) {
  pokemons: pokemon_v2_pokemon(
    offset: $offset,
    limit: $limit,
    where: { name: { _regex: $name } }
  ) {
    id
    name
  }
}
`

const fetch = async ({ offset = 0, search = '' }): Promise<FetchResult> => {
  const limit = 10
  const name = search

  const response = await client<PokemonsResponse, QueryParams>(
    pokemonsQuery, { offset, name, limit }
  )

  const pokemons = response.pokemons.map(pokemon => ({
    ...pokemon,
    picture: getPokemonPictureUrl(pokemon.id),
  }))

  return {
    offset: offset + limit,
    data: pokemons,
  }
}

const query = (search: string): UseInfiniteQueryResult<FetchResult> =>
    useInfiniteQuery(
      ['pokemons', search],
      ({ pageParam }) => fetch({ offset: pageParam, search }),
      {
        keepPreviousData: true,
        getNextPageParam: ({ offset }: { offset: number }) => offset,
      }
    )

export default query
