import { action } from '@storybook/addon-actions'

import Button from '.'

export default {
  title: 'components/Button',
  component: Button,
}

export const Default = (): JSX.Element => (
  <>
    <Button onClick={action('onClick')}>
      Click me!
    </Button>
    <Button
      variant="unstyled"
      onClick={action('onClick')}
    >
      Click me!
    </Button>
  </>
)

export const Disabled = (): JSX.Element => (
  <>
    <Button
      disabled
      onClick={action('onClick')}
    >
      Click me!
    </Button>
    <Button
      disabled
      variant="unstyled"
      onClick={action('onClick')}
    >
      Click me!
    </Button>
  </>
)
