import { fireEvent, render, screen } from '@testing-library/react'

import { Bookmarks } from '.'

const pokemons = [
  { id: 1, name: 'Bulbasaur', picture: '' },
  { id: 2, name: 'Ivysaur', picture: '' },
]

it('should render items without errors', () => {
  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] },
  })

  render(
    <Bookmarks
      onNavigateBack={jest.fn()}
      onPokemonClick={jest.fn()}
      hooks={{ usePokemons }}
    />
  )
})

it('should call onPokemonClick with pokemon id', () => {
  const onPokemonClick = jest.fn()

  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] },
  })

  render(
    <Bookmarks
      onNavigateBack={jest.fn()}
      onPokemonClick={onPokemonClick}
      hooks={{ usePokemons }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur #001' }))

  expect(onPokemonClick).toHaveBeenCalledWith(1)
})

it('should call onNavigateBack when clicking on back button', () => {
  const onNavigateBack = jest.fn()

  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] },
  })

  render(
    <Bookmarks
      onNavigateBack={onNavigateBack}
      onPokemonClick={jest.fn()}
      hooks={{ usePokemons }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Back button' }))

  expect(onNavigateBack).toHaveBeenCalled()
})
