import { action } from '@storybook/addon-actions'

import { Bookmarks } from '..'
import { PokemonTypes } from '../../../types/pokemon'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'pages/Bookmarks',
  component: Bookmarks,
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
