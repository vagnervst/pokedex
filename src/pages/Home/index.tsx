import { useState } from 'react'
import { UseInfiniteQueryResult } from 'react-query'
import { useHistory } from 'react-router'

import {
  Container,
  Subtitle,
} from './styles'

import { ReactComponent as BookmarksIcon } from './bookmarks.svg'

import type { PokemonType } from '../../types/pokemon'

import usePokemonList from './hooks/usePokemonList'
import useDebounce from '../../hooks/useDebounce'

import Header from '../../components/Header'
import Input from '../../components/Input'
import PokemonList from '../../components/PokemonList'
import IconButton from '../../components/IconButton'

type Props = {
  hooks: {
    usePokemonList: (name: string) =>
      Partial<UseInfiniteQueryResult<{ data: PokemonType[] }>>
  },
  onBookmarksClick: () => void,
  onPokemonClick: (id: number) => void,
}

export const Home = ({
  onBookmarksClick,
  onPokemonClick = () => ({}),
  hooks,
}: Props): JSX.Element => {
  const [search, setSearch] = useState('')
  const pokemonName = useDebounce(search, 400)

  const { isLoading, data, fetchNextPage } = hooks.usePokemonList(pokemonName)

  const pokemons = data
    ? data.pages.map(({ data }) => data)
    : []

  return (
    <Container>
      <Header title="Pokédex">
        <IconButton
          ariaLabel="Bookmarks"
          onClick={onBookmarksClick}
          variant="ghost"
          icon={<BookmarksIcon width={24} height={24} />}
        />
      </Header>
      <Input
        disabled={isLoading}
        name="search"
        placeholder="Search for a pokémon"
        onChange={({ target }) => setSearch(target.value)}
      />
      <Subtitle>
        The Pokédex contains detailed stats for every
        creature from the Pokémon games.
      </Subtitle>
      <PokemonList
        items={pokemons.flat() || []}
        onItemClick={onPokemonClick}
        onLoadMore={() => fetchNextPage && fetchNextPage()}
      />
    </Container>
  )
}

const HomePage = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Home
      onBookmarksClick={() => push('/bookmarks')}
      onPokemonClick={id => push(`/pokemon/${id}`)}
      hooks={{ usePokemonList }}
    />
  )
}

export default HomePage
