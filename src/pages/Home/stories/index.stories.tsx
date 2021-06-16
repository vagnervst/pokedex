import { action } from '@storybook/addon-actions'

import { Home } from '..'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
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

export const Disabled = (): JSX.Element => (
  <Home
    onBookmarksClick={action('onBookmarksClick')}
    onPokemonClick={action('onPokemonClick')}
    onLogoutClick={action('onLogoutClick')}
    hooks={{
      usePokemons: () => ({ isLoading: true })
    }}
  />
)
