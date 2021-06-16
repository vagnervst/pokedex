import { useQuery, UseQueryResult } from 'react-query'
import client from '../../utils/api/client'

import {
  pokemonsByIdVariables,
  pokemonsById,
} from './queries'

import formatPokemon from './common'
import { QueryResponse } from './types'
import { Pokemon } from '../../types/pokemon'

const fetch = async (id: number) => {
  const { pokemons } = await client<{ pokemons: QueryResponse[] }, pokemonsByIdVariables>(pokemonsById, {
    ids: [id], offset: 0, limit: 1,
  })

  const pokemon = pokemons[0]

  return formatPokemon(pokemon)
}

const find = (id: number): UseQueryResult<Pokemon> =>
  useQuery(['pokemon', id], () => fetch(id))

export default find
