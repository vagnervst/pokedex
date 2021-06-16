import { render, screen, fireEvent } from '@testing-library/react'

import Button from '.'

it('should call onClick when clicking', () => {
  const onClick = jest.fn()

  render(
    <Button onClick={onClick}>Login</Button>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Login' }))

  expect(onClick).toHaveBeenCalled()
})

it('should not call onClick when disabled', () => {
  const onClick = jest.fn()

  render(
    <Button disabled onClick={onClick}>Login</Button>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Login' }))

  expect(onClick).not.toHaveBeenCalled()
})
