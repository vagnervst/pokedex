import { request } from 'graphql-request'

const client = <Response, Variables = void>(query: string, variables?: Variables):
  Promise<Response> => request<Response, Variables>(
    'https://beta.pokeapi.co/graphql/v1beta', query, variables
  )

export default client
