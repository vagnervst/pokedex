import { act, fireEvent, render, screen } from '../../../tests/test-utils'

import { Login } from '.'

const getEmailInput = () => screen.getByRole('textbox', { name: 'Email' })
const getPasswordInput = () => screen.getByLabelText('Password')
const getSubmitButton = () => screen.getByRole('button', { name: 'Login' })

it('should enter loading state while login request is unfinished', async () => {
  const promise = Promise.resolve('session')
  const authenticate = jest.fn(() => promise)

  render(
    <Login authenticate={authenticate} onLogin={jest.fn()} />
  )

  fireEvent.change(getEmailInput(), { target: { value: 'test@email.com' } })
  fireEvent.change(getPasswordInput(), { target: { value: 'testpassword' } })
  fireEvent.click(getSubmitButton())

  expect(getEmailInput()).toBeDisabled()
  expect(getPasswordInput()).toBeDisabled()
  expect(getSubmitButton()).toBeDisabled()

  await act(async () => { await promise })

  expect(getEmailInput()).not.toBeDisabled()
  expect(getPasswordInput()).not.toBeDisabled()
  expect(getSubmitButton()).not.toBeDisabled()
})

it('should call authenticate prop with expected credentials', async () => {
  const promise = Promise.resolve('session')
  const authenticate = jest.fn(() => promise)

  render(
    <Login authenticate={authenticate} onLogin={jest.fn()} />
  )

  fireEvent.change(getEmailInput(), { target: { value: 'test@email.com' } })
  fireEvent.change(getPasswordInput(), { target: { value: 'testpassword' } })
  fireEvent.click(getSubmitButton())

  await act(async () => { await promise })

  expect(authenticate).toHaveBeenCalledWith({
    email: 'test@email.com',
    password: 'testpassword',
  })
})

it('should call onLogin after a successful request', async () => {
  const promise = Promise.resolve('session_id')
  const authenticate = jest.fn(() => promise)
  const onLogin = jest.fn()

  render(
    <Login authenticate={authenticate} onLogin={onLogin} />
  )

  fireEvent.change(getEmailInput(), { target: { value: 'test@email.com' } })
  fireEvent.change(getPasswordInput(), { target: { value: 'testpassword' } })
  fireEvent.click(getSubmitButton())

  await act(async () => { await promise })

  expect(onLogin).toHaveBeenCalledWith('session_id')
})
