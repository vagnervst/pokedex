import { screen, fireEvent, render } from '../../../tests/test-utils'

import SearchInput from '.'

it('should call onChange when typing', () => {
  const onChange = jest.fn()

  render(<SearchInput onChange={onChange} />)

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'testing' } })

  expect(onChange).toHaveBeenCalled()
})

it('should not call onChange when disabled', () => {
  const onChange = jest.fn()

  render(<SearchInput disabled onChange={onChange} />)

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'testing' } })

  expect(onChange).not.toHaveBeenCalled()
})
