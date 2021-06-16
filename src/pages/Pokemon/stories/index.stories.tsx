import { action } from '@storybook/addon-actions'
import { QueryObserverSuccessResult } from 'react-query'

import mockLocalStorage from '../../../mocks/localStorage'

import {
  Pokemon as PokemonType,
  PokemonStats,
  PokemonTypes,
} from '../../../types/pokemon'

import { Pokemon } from '..'

import BulbasaurImage from './bulbasaur.png'

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage(),
})

const usePokemon = (): Partial<QueryObserverSuccessResult<PokemonType>> => ({
  isLoading: false,
  data: {
    id: 1,
    name: 'Bulbasaur',
    picture: BulbasaurImage,
    stats: [
      { value: 45, stat: { name: PokemonStats.HP } },
      { value: 49, stat: { name: PokemonStats.Attack } },
      { value: 49, stat: { name: PokemonStats.Defense } },
      { value: 65, stat: { name: PokemonStats.SpecialAttack } },
      { value: 65, stat: { name: PokemonStats.SpecialDefense } },
      { value: 45, stat: { name: PokemonStats.Speed } },
    ],
    types: [
      { slot: 1, type: { name: 'grass' as PokemonTypes } },
      { slot: 2, type: { name: 'poison' as PokemonTypes } },
    ]
  }
})

export default {
  title: 'Pages/Pokémon',
  component: Pokemon,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = (): JSX.Element => (
  <Pokemon
    pokemonId={1}
    onBackClick={action('onBackClick')}
    hooks={{ usePokemon }}
  />
)
