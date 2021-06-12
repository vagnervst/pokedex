import { action } from '@storybook/addon-actions'

import BulbasaurImage from './bulbasaur.png'

import PokemonList from '..'

export default {
  title: 'Components/PokemonList',
  component: PokemonList,
}

const items = [
  { id: 1, picture: BulbasaurImage, name: 'Bulbasaur' },
  { id: 2, picture: BulbasaurImage, name: 'Bulbasaur Clone' },
]

export const Default = (): JSX.Element => (
  <PokemonList
    onItemClick={action('onItemClick')}
    items={items}
  />
)
