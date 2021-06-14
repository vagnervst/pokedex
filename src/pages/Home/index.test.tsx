import { fireEvent, render, screen } from '@testing-library/react'
import { QueryObserverSuccessResult, QueryObserverLoadingResult } from 'react-query'

import { Home } from '.'
import { PokemonType } from '../../types/pokemon'

it('should disable interactive components while on loading state', () => {
  const usePokemonList = (): Partial<QueryObserverLoadingResult<PokemonType[]>> => ({
    isLoading: true,
  })

  render(<Home hooks={{ usePokemonList }} />)

  expect(screen.getByPlaceholderText('Search for a pokémon')).toBeDisabled()
})

it('should render items without errors', () => {
  const usePokemonList = (): Partial<QueryObserverSuccessResult<PokemonType[]>> => ({
    isLoading: false,
    data: [
      { id: 1, name: 'Bulbasaur', picture: '' },
      { id: 2, name: 'Pikachu', picture: '' },
    ]
  })

  render(<Home hooks={{ usePokemonList }} />)
})

it('should call onPokemonClick with pokemon id', () => {
  const onPokemonClick = jest.fn()

  const usePokemonList = (): Partial<QueryObserverSuccessResult<PokemonType[]>> => ({
    isLoading: false,
    data: [
      { id: 1, name: 'Bulbasaur', picture: '' },
      { id: 2, name: 'Pikachu', picture: '' },
    ]
  })

  render(
    <Home
      onPokemonClick={onPokemonClick}
      hooks={{ usePokemonList }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur #001' }))

  expect(onPokemonClick).toHaveBeenCalledWith(1)
})
