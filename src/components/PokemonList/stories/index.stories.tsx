import { action } from '@storybook/addon-actions'

import BulbasaurImage from './bulbasaur.png'

import PokemonList from '..'
import { PokemonTypes } from '../../../types/pokemon'

export default {
  title: 'Components/PokemonList',
  component: PokemonList,
}

const items = new Array(10).fill(0).map((value, index) => ({
  id: index,
  picture: BulbasaurImage,
  name: `Bulbasaur ${index + 1}`,
  types: [{ slot: 1, type: { name: 'grass' as PokemonTypes } }],
  stats: [],
}))

export const Default = (): JSX.Element => (
  <PokemonList
    onItemClick={action('onItemClick')}
    items={items}
  />
)
