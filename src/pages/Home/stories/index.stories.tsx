import { action } from '@storybook/addon-actions'

import { Home } from '..'
import { PokemonTypes } from '../../../types/pokemon'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
}

const pokemons = new Array(10).fill(0).map((value, index) => ({
  id: index,
  picture: BulbasaurImage,
  name: `Bulbasaur ${index + 1}`,
  types: [{ slot: 1, type: { name: 'grass' as PokemonTypes } }],
  stats: [],
}))

export const Default = (): JSX.Element => (
  <Home
    onBookmarksClick={action('onBookmarksClick')}
    onPokemonClick={action('onPokemonClick')}
    onLogoutClick={action('onLogoutClick')}
    hooks={{
      usePokemons: () => ({
        isLoading: false,
        data: {
          pageParams: [],
          pages: [
            { offset: 0, data: pokemons },
          ]
        }
      })
    }}
  />
)

export const Loading = (): JSX.Element => (
  <Home
    onBookmarksClick={action('onBookmarksClick')}
    onPokemonClick={action('onPokemonClick')}
    onLogoutClick={action('onLogoutClick')}
    hooks={{
      usePokemons: () => ({ isLoading: true })
    }}
  />
)
