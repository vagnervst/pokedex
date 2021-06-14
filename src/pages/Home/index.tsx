import { useState } from 'react'
import { UseQueryResult } from 'react-query'
import { useHistory } from 'react-router'

import {
  Container,
  Subtitle,
  Title,
} from './styles'

import type { PokemonType } from '../../types/pokemon'

import usePokemonList from './hooks/usePokemonList'
import useDebounce from '../../hooks/useDebounce'

import Input from '../../components/Input'
import PokemonList from '../../components/PokemonList'

type Props = {
  hooks: {
    usePokemonList: (name: string) =>
      UseQueryResult<PokemonType[]>|Partial<UseQueryResult<PokemonType[]>>
  },
  onPokemonClick?: (id: number) => void,
}

export const Home = ({
  onPokemonClick = () => ({}),
  hooks,
}: Props): JSX.Element => {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search, 400)
  const { isLoading, data } = hooks.usePokemonList(debounced)

  return (
    <Container>
      <Title>Pokédex</Title>
      <form>
        <Input
          disabled={isLoading}
          name="search"
          placeholder="Search for a pokémon"
          onChange={({ target }) => setSearch(target.value)}
        />
      </form>
      <Subtitle>
        The Pokédex contains detailed stats for every creature from the Pokémon games.
      </Subtitle>
      <PokemonList
        items={data || []}
        onItemClick={onPokemonClick}
      />
    </Container>
  )
}

const HomePage = (): JSX.Element => {
  const { push } = useHistory()

  const handlePokemonClick = (id: number) => {
    push(`/pokemon/${id}`)
  }

  return (
    <Home
      onPokemonClick={handlePokemonClick}
      hooks={{ usePokemonList }}
    />
  )
}

export default HomePage
