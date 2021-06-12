import { request } from 'graphql-request'

const client = <T>(query: string): Promise<T> =>
  request<T>('https://beta.pokeapi.co/graphql/v1beta', query)

export default client
