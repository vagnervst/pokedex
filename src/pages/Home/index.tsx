import { UseQueryResult } from 'react-query'
import { useHistory } from 'react-router'

import {
  Container,
  Subtitle,
  Title,
} from './styles'

import type { PokemonType } from '../../types/pokemon'

import usePokemonList from './hooks/usePokemonList'

import Input from '../../components/Input'
import PokemonList from '../../components/PokemonList'

type Props = {
  hooks: {
    usePokemonList: () => UseQueryResult<PokemonType[]>|Partial<UseQueryResult<PokemonType[]>>
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
