import { QueryObserverSuccessResult, QueryObserverLoadingResult } from 'react-query'

import { Home } from '..'
import { PokemonType } from '../../../types/pokemon'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Pages/Home',
  component: Home,
}

const pokemons = [
  {
    id: 1,
    picture: BulbasaurImage,
    name: 'Bulbasaur',
  },
  {
    id: 2,
    picture: BulbasaurImage,
    name: 'Bulbasaur Clone',
  },
]

export const Default = (): JSX.Element => (
  <Home hooks={{
      usePokemonList: (): Partial<QueryObserverSuccessResult<PokemonType[]>> => ({
        isLoading: false,
        data: pokemons
      })
    }}
  />
)

export const Disabled = (): JSX.Element => (
  <Home hooks={{
      usePokemonList: (): Partial<QueryObserverLoadingResult<PokemonType[]>> => ({
        isLoading: true,
      })
    }}
  />
)
