import { fireEvent, render, screen } from '@testing-library/react'

import PokemonList from '.'

it('should call onItemClick with the expected id', () => {
  const onItemClick = jest.fn()

  render(
    <PokemonList
      onItemClick={onItemClick}
      items={[
        { id: 1, name: 'Bulbasaur', picture: '' },
        { id: 2, name: 'Bulbasaur Clone', picture: '' },
      ]}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur Clone #002' }))

  expect(onItemClick).toHaveBeenCalledWith(2)
})
