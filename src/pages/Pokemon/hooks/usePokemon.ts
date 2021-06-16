import { gql } from 'graphql-request'
import { useQuery, UseQueryResult } from 'react-query'

import { Pokemon } from '../../../types/pokemon'

import client, { getPokemonPictureUrl } from '../../../utils/api/client'

const query = gql`
query($id: Int!) {
  pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
    id
    name
    stats: pokemon_v2_pokemonstats {
      value: base_stat
      stat: pokemon_v2_stat {
        name
      }
    }
    types: pokemon_v2_pokemontypes {
      slot
      type: pokemon_v2_type {
        name
      }
    }
  }
}
`

const fetch = async (id: number) => {
  const { pokemon } = await client(query, { id })

  pokemon.picture = getPokemonPictureUrl(pokemon.id)

  return pokemon
}

const usePokemon = (id: number): UseQueryResult<Pokemon> =>
  useQuery(`pokemonDetails/${id}`, () => fetch(id))

export default usePokemon
