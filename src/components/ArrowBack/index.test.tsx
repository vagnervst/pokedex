import { render, screen, fireEvent } from '@testing-library/react'

import ArrowBack from '.'

it('should call onClick when Clicking on arrow button', () => {
  const onClick = jest.fn()

  render(<ArrowBack onClick={onClick} />)

  fireEvent.click(screen.getByRole('button', { name: 'Back button' }))

  expect(onClick).toHaveBeenCalled()
})
