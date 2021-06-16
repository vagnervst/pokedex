import { fireEvent, render, screen } from '../../../tests/test-utils'

import Header from '.'

it('should render title', () => {
  render(
    <Header title="Test Title" />
  )

  screen.getByText('Test Title')
})

it('should render children', () => {
  render(
    <Header title="Test Title">
      <button>Click</button>
    </Header>
  )

  screen.getByRole('button', { name: 'Click' })
})

it('should call onBack when clicking on back button', () => {
  const onNavigateBack = jest.fn()

  render(
    <Header
      showBackButton
      onNavigateBack={onNavigateBack}
      title="Test Title"
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Back button' }))

  expect(onNavigateBack).toHaveBeenCalled()
})
