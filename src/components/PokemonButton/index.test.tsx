import { fireEvent, render, screen } from '../../../tests/test-utils'

import PokemonCard from '.'

it('should call onClick with id when clicking', () => {
  const onClick = jest.fn()

  render(
    <PokemonCard
      id={1}
      picture=""
      name="Bulbasaur"
      onClick={onClick}
    />
  )

  fireEvent.click(screen.getByRole('button'))

  expect(onClick).toHaveBeenCalledWith(1)
})
