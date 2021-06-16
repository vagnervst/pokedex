import { render, screen, fireEvent } from '../../../tests/test-utils'

import Button from '.'

it.only('should call onClick when clicking', () => {
  const onClick = jest.fn()

  render(
    <Button onClick={onClick}>Login</Button>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Login' }))

  expect(onClick).toHaveBeenCalled()
})

it.only('should not call onClick when disabled', () => {
  const onClick = jest.fn()

  render(
    <Button disabled onClick={onClick}>Login</Button>
  )

  fireEvent.click(screen.getByRole('button', { name: 'Login' }))

  expect(onClick).not.toHaveBeenCalled()
})
