import { action } from '@storybook/addon-actions'

import Input from '.'

export default {
  title: 'Components/Input',
  component: Input,
}

export const Default = (): JSX.Element => (
  <Input
    onChange={action('onChange')}
    placeholder="Search for a pokémon"
  />
)

export const Disabled = (): JSX.Element => (
  <Input
    disabled
    onChange={action('onChange')}
    placeholder="Search for a pokémon"
  />
)
