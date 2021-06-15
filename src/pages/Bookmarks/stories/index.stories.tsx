import { action } from '@storybook/addon-actions'

import { Bookmarks } from '..'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'pages/Bookmarks',
  component: Bookmarks,
  parameters: {
    layout: 'fullscreen',
  },
}

const pokemons = [
  { id: 1, picture: BulbasaurImage, name: 'Bulbasaur' },
  { id: 2, picture: BulbasaurImage, name: 'Bulbasaur Clone' },
]

const usePokemons = () => ({
  data: {
    pageParams: [],
    pages: [
      { offset: 0, data: pokemons },
    ]
  },
})

export const Default = (): JSX.Element => (
  <Bookmarks
    onPokemonClick={action('onPokemonClick')}
    onNavigateBack={action('onNavigateBack')}
    hooks={{ usePokemons }}
  />
)
