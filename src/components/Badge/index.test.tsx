import { render, screen } from '@testing-library/react'

import Badge from '.'

it('should show the provided label', () => {
  render(<Badge>Testing</Badge>)

  expect(screen.getByText('Testing')).toBeInTheDocument()
})
