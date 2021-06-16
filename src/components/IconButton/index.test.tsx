import { fireEvent, render, screen } from '../../../tests/test-utils'

import IconButton from '.'

it('should call onClick when clicking on the button', () => {
  const onClick = jest.fn()

  render(
    <IconButton
      ariaLabel="test-button"
      icon={<span>Icon</span>}
      onClick={onClick}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'test-button' }))

  expect(onClick).toHaveBeenCalled()
})
