import { render, screen } from '@testing-library/react'

import { Home } from '.'

it('should disable interactive components while on loading state', () => {
  const usePokemonList = () => ({
    isLoading: true,
    data: [],
  })

  render(<Home hooks={{ usePokemonList }} />)

  expect(screen.getByPlaceholderText('Search for a pokémon')).toBeDisabled()
})

it('should render items without errors', () => {
  const usePokemonList = () => ({
    isLoading: false,
    data: [
      { id: 1, name: 'Bulbasaur', picture: '' },
      { id: 2, name: 'Pikachu', picture: '' },
    ]
  })

  render(<Home hooks={{ usePokemonList }} />)
})
