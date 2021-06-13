import { action } from '@storybook/addon-actions'

import ArrowBack from '.'

export default {
  title: 'Components/ArrowBack',
  component: ArrowBack
}

export const Default = (): JSX.Element => (
  <ArrowBack fill="black" onClick={action('onClick')} />
)
