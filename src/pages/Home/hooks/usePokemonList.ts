import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import client, { getPokemonPictureUrl } from '../../../utils/api/client'

import type { PokemonType } from '../../../types/pokemon'

type PokemonsResponse = {
  pokemons: { id: number, name: string }[]
}

const pokemonsQuery = gql`
query ($name: String!) {
  pokemons: pokemon_v2_pokemon(offset: 0, limit: 10, where: { name: { _regex: $name } }) {
    id
    name
  }
}
`

const fetch = async (name: string) => {
  const { pokemons } = await client<PokemonsResponse, { name: string }>(
    pokemonsQuery, { name }
  )

  return pokemons.map(pokemon => ({
    ...pokemon,
    picture: getPokemonPictureUrl(pokemon.id),
  }))
}

const query = (search: string): UseQueryResult<PokemonType[]> =>
  useQuery(`pokemonList/${search}`, () => fetch(search))

export default query
