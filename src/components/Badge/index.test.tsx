import { render, screen } from '../../../tests/test-utils'

import Badge from '.'

it('should show the provided label', () => {
  render(<Badge>Testing</Badge>)

  expect(screen.getByText('Testing')).toBeInTheDocument()
})
