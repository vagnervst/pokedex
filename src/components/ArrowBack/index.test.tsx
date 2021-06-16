import { render, screen, fireEvent } from '../../../tests/test-utils'

import ArrowBack from '.'

it('should call onClick when Clicking on arrow button', () => {
  const onClick = jest.fn()

  render(<ArrowBack onClick={onClick} />)

  fireEvent.click(screen.getByRole('button', { name: 'Back button' }))

  expect(onClick).toHaveBeenCalled()
})
