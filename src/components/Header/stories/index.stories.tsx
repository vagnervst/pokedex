import { ReactComponent as BookmarksIcon } from './bookmarks.svg'

import IconButton from '../../IconButton'

import Header from '..'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Header',
  component: Header
}

export const WithTitle = (): JSX.Element => <Header title="Header" />

export const WithChildren = (): JSX.Element => (
  <Header title="Header">
    <IconButton
      ariaLabel="Bookmarks"
      onClick={action('onClick')}
      variant="unstyled"
      icon={<BookmarksIcon width={24} height={24} />}
    />
  </Header>
)
