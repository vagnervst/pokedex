import { action } from '@storybook/addon-actions'

import { Bookmarks } from '..'

import BulbasaurPng from './bulbasaur.png'

export default {
  title: 'pages/Bookmarks',
  component: Bookmarks,
  parameters: {
    layout: 'fullscreen',
  },
}

const usePokemons = () => ({
  data: [
    { id: 1, name: 'Bulbasaur', picture: BulbasaurPng },
  ],
})

export const Default = (): JSX.Element => (
  <Bookmarks
    onPokemonClick={action('onPokemonClick')}
    hooks={{ usePokemons }}
  />
)
