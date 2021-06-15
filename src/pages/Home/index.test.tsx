import { fireEvent, render, screen } from '@testing-library/react'

import { Home } from '.'

const pokemons = [
  { id: 1, name: 'Bulbasaur', picture: '' },
  { id: 2, name: 'Pikachu', picture: '' },
]

it('should disable interactive components while on loading state', () => {
  const usePokemonList = () => ({
    isLoading: true,
  })

  render(
    <Home
      hooks={{ usePokemonList }}
      onBookmarksClick={jest.fn()}
      onPokemonClick={jest.fn()}
    />
  )

  expect(screen.getByPlaceholderText('Search for a pokémon')).toBeDisabled()
})

it('should render items without errors', () => {
  const usePokemonList = () => ({
    data: {
      pageParams: [],
      pages: [
        { data: pokemons },
      ]
    }
  })

  render(
    <Home
      hooks={{ usePokemonList }}
      onBookmarksClick={jest.fn()}
      onPokemonClick={jest.fn()}
    />
  )
})

it('should call onPokemonClick with pokemon id', () => {
  const onPokemonClick = jest.fn()

  const usePokemonList = () => ({
    data: {
      pageParams: [],
      pages: [
        { data: pokemons },
      ]
    }
  })

  render(
    <Home
      onBookmarksClick={jest.fn()}
      onPokemonClick={onPokemonClick}
      hooks={{ usePokemonList }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur #001' }))

  expect(onPokemonClick).toHaveBeenCalledWith(1)
})

it('should call onBookmarksClick when clicking on bookmarks icon', () => {
  const onBookmarksClick = jest.fn()

  const usePokemonList = () => ({
    data: {
      pageParams: [],
      pages: [
        { data: pokemons },
      ]
    }
  })

  render(
    <Home
      onPokemonClick={jest.fn()}
      onBookmarksClick={onBookmarksClick}
      hooks={{ usePokemonList }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bookmarks' }))

  expect(onBookmarksClick).toHaveBeenCalled()
})
