import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from 'react-query'

import client from '../../utils/api/client'

import { QueryResponse } from './types'

import { Pokemon } from '../../types/pokemon'

import {
  pokemonsById,
  pokemonsByName,
} from './queries'

import formatPokemon from './common'

type QueryParams = {
  offset?: number,
  name?: string,
  limit?: number,
  ids?: number[],
}

type FetchResult = {
  offset: number,
  data: Pokemon[],
}

type getPokemonsByIdType = (params: QueryParams) =>
  Promise<{ pokemons: QueryResponse[] }>

const getPokemonsById: getPokemonsByIdType = ({ ids, limit, offset }) =>
  client(pokemonsById, { ids, limit, offset })

type getPokemonsByNameType = (params: QueryParams)
  => Promise<{ pokemons: QueryResponse[] }>

const getPokemonsByName: getPokemonsByNameType = ({ limit, name, offset }) =>
  client(pokemonsByName, { limit, name, offset })

type fetchType = (params: QueryParams) => Promise<FetchResult>

const fetch: fetchType = async ({
  ids = [],
  limit = 10,
  name = '',
  offset = 0,
}) => {
  const request = ids.length > 0
    ? getPokemonsById
    : getPokemonsByName

  const response = await request({ offset, name, limit, ids })

  const pokemons = response.pokemons.map(formatPokemon)

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

const findAll: usePokemonsType = (
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

export default findAll
