import { action } from '@storybook/addon-actions'

import BulbasaurImage from './bulbasaur.png'

import PokemonButton from '..'

export default {
  title: 'Components/PokemonButton',
  component: PokemonButton,
}

export const Default = (): JSX.Element => (
  <PokemonButton
    onClick={action('onClick')}
    id={1}
    picture={BulbasaurImage}
    name="Bulbasaur"
  />
)
