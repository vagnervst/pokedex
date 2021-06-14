import { request } from 'graphql-request'

export const getPokemonPictureUrl = (pokemonId: number): string =>
`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

const client = <Response, Variables = void>(query: string, variables?: Variables):
  Promise<Response> => request<Response, Variables>(
    'https://beta.pokeapi.co/graphql/v1beta', query, variables
  )

export default client
