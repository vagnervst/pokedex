import { fireEvent, render, screen, within } from '@testing-library/react'
import { QueryObserverSuccessResult } from 'react-query'

import { PokemonDetails, PokemonStats } from '../../types/pokemon'

import { Pokemon } from '.'

const pokemonData = {
  id: 1,
  name: 'Bulbasaur',
  picture: '',
  stats: [
    { value: 45, stat: { name: PokemonStats.HP } },
    { value: 49, stat: { name: PokemonStats.Attack } },
    { value: 49, stat: { name: PokemonStats.Defense } },
    { value: 65, stat: { name: PokemonStats.SpecialAttack } },
    { value: 65, stat: { name: PokemonStats.SpecialDefense } },
    { value: 45, stat: { name: PokemonStats.Speed } },
  ],
  types: [
    { slot: 1, type: { name: 'grass' } },
    { slot: 2, type: { name: 'poison' } },
  ]
}

it('should show the pokemon stats', () => {
  const usePokemon = ():
    Partial<QueryObserverSuccessResult<PokemonDetails>> => ({
      isLoading: false,
      data: pokemonData,
    })

  render(
    <Pokemon
      pokemonId={1}
      onBackClick={jest.fn()}
      onBookmarkClick={jest.fn()}
      hooks={{ usePokemon }}
    />
  )

  within(screen.getByLabelText('hp')).getByText('45')
  within(screen.getByLabelText('attack')).getByText('49')
  within(screen.getByLabelText('defense')).getByText('49')
  within(screen.getByLabelText('special-attack')).getByText('65')
  within(screen.getByLabelText('special-defense')).getByText('65')
  within(screen.getByLabelText('speed')).getByText('45')
})

it('should show the pokemon types', () => {
  const usePokemon = ():
    Partial<QueryObserverSuccessResult<PokemonDetails>> => ({
      isLoading: false,
      data: pokemonData,
    })

  render(
    <Pokemon
      pokemonId={1}
      onBackClick={jest.fn()}
      onBookmarkClick={jest.fn()}
      hooks={{ usePokemon }}
    />
  )

  screen.getByLabelText('grass')
  screen.getByLabelText('poison')
})

it('should change bookmark state', () => {
  const onBookmarkClick = jest.fn()

  const usePokemon = ():
    Partial<QueryObserverSuccessResult<PokemonDetails>> => ({
      isLoading: false,
      data: pokemonData,
    })

  render(
    <Pokemon
      pokemonId={1}
      onBackClick={jest.fn()}
      onBookmarkClick={onBookmarkClick}
      hooks={{ usePokemon }}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bookmark Pokémon' }))
  expect(onBookmarkClick).toHaveBeenCalledWith(true)

  fireEvent.click(screen.getByRole('button', { name: 'Bookmark Pokémon' }))
  expect(onBookmarkClick).toHaveBeenCalledWith(false)
})
