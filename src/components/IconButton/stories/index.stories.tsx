import { action } from '@storybook/addon-actions'

import IconButton from '..'

import { ReactComponent as Icon } from './bookmark.svg'

export default {
  title: 'Components/IconButton',
  component: IconButton,
}

export const Default = (): JSX.Element => (
  <IconButton
    ariaLabel="icon-button"
    icon={<Icon width={32} height={32} />}
    onClick={action('onClick')}
  />
)
