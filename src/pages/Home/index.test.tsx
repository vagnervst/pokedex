import { fireEvent, render, screen } from '@testing-library/react'

import { Home } from '.'

const pokemons = [
  { id: 1, name: 'Bulbasaur', picture: '' },
  { id: 2, name: 'Pikachu', picture: '' },
]

it('should disable interactive components while on loading state', () => {
  const usePokemons = () => ({
    isLoading: true,
  })

  render(
    <Home
      hooks={{ usePokemons }}
      onBookmarksClick={jest.fn()}
      onPokemonClick={jest.fn()}
    />
  )

  expect(screen.getByPlaceholderText('Search for a pokémon')).toBeDisabled()
})

it('should render items without errors', () => {
  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] }
  })

  render(
    <Home
      hooks={{ usePokemons }}
      onBookmarksClick={jest.fn()}
      onPokemonClick={jest.fn()}
    />
  )
})

it('should call onPokemonClick with pokemon id', () => {
  const onPokemonClick = jest.fn()

  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] }
  })

  render(
    <Home
      onBookmarksClick={jest.fn()}
      onPokemonClick={onPokemonClick}
      hooks={{ usePokemons }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur #001' }))

  expect(onPokemonClick).toHaveBeenCalledWith(1)
})

it('should call onBookmarksClick when clicking on bookmarks icon', () => {
  const onBookmarksClick = jest.fn()

  const usePokemons = () => ({
    data: { pageParams: [], pages: [{ offset: 0, data: pokemons }] }
  })

  render(
    <Home
      onPokemonClick={jest.fn()}
      onBookmarksClick={onBookmarksClick}
      hooks={{ usePokemons }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bookmarks' }))

  expect(onBookmarksClick).toHaveBeenCalled()
})
