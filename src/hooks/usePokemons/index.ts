import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from 'react-query'
import { gql } from 'graphql-request'

import client, { getPokemonPictureUrl } from '../../utils/api/client'

import type { PokemonType } from '../../types/pokemon'

type PokemonsResponse = {
  pokemons: { id: number, name: string }[],
}

type QueryParams = {
  offset?: number,
  name?: string,
  limit?: number,
  ids?: number[],
}

type FetchResult = {
  offset: number,
  data: PokemonType[],
}

const PokemonInfo = gql`
fragment PokemonInfo on pokemon_v2_pokemon {
  id
  name
  types: pokemon_v2_pokemontypes {
    slot
    info: pokemon_v2_type {
      name
    }
  }
}
`

const pokemonsById = gql`
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

const pokemonsByName = gql`
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

const getPokemonsById = ({ ids, limit, offset }: QueryParams):
  Promise<PokemonsResponse> => client(pokemonsById, { ids, limit, offset })

const getPokemonsByName = ({ limit, name, offset }: QueryParams):
  Promise<PokemonsResponse> => client(pokemonsByName, { limit, name, offset })

const fetch = async (
  { ids = [], limit = 10, name = '', offset = 0 }: QueryParams
): Promise<FetchResult> => {
  const request = ids.length > 0
    ? getPokemonsById
    : getPokemonsByName

  const response = await request({ offset, name, limit, ids })

  const pokemons = response.pokemons.map(pokemon => ({
    ...pokemon,
    picture: getPokemonPictureUrl(pokemon.id),
  }))

  return {
    offset: offset + limit,
    data: pokemons,
  }
}

export type usePokemonsType = (
  name: string,
  ids: number[],
  opts?: UseInfiniteQueryOptions<FetchResult>,
) => Partial<UseInfiniteQueryResult<FetchResult>>

const query: usePokemonsType = (
  name, ids, opts,
) => useInfiniteQuery(
    ['pokemons', name, ids],
    ({ pageParam }) => fetch({ offset: pageParam, name, ids }),
    {
      ...opts,
      keepPreviousData: true,
      getNextPageParam: ({ offset }: { offset: number }) => offset,
    }
  )

export default query
