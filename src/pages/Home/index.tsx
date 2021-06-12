import { UseQueryResult } from 'react-query'

import {
  Container,
  Subtitle,
  Title,
} from './styles'

import type { Pokemon } from '../../types/pokemon'

import usePokemonList from './hooks/usePokemonList'

import Input from '../../components/Input'
import PokemonList from '../../components/PokemonList'

type Props = {
  hooks: {
    usePokemonList: () => UseQueryResult<Pokemon[]>|Partial<UseQueryResult<Pokemon[]>>
  },
  onPokemonClick?: (id: number) => void,
}

export const Home = ({
  onPokemonClick = () => ({}),
  hooks,
}: Props): JSX.Element => {
  const { isLoading, data } = hooks.usePokemonList()

  return (
    <Container>
      <Title>Pokédex</Title>
      <form>
        <Input
          disabled={isLoading}
          placeholder="Search for a pokémon"
          onChange={console.log}
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
  return (
    <Home
      onPokemonClick={console.log}
      hooks={{ usePokemonList }}
    />
  )
}

export default HomePage
