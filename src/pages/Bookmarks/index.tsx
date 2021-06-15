import { UseQueryOptions, UseQueryResult } from 'react-query'
import { useHistory } from 'react-router'

import { PokemonType } from '../../types/pokemon'

import Header from '../../components/Header'
import PokemonList from '../../components/PokemonList'

import useBookmark from '../../hooks/useBookmark'
import usePokemons from '../../hooks/usePokemons'

import { Container } from './styles'

type Props = {
  hooks: {
    usePokemons: (ids: number[], opts: UseQueryOptions<PokemonType[]>) =>
      UseQueryResult<PokemonType[]>|Partial<UseQueryResult<PokemonType[]>>
  },
  onPokemonClick: (id: number) => void,
  onNavigateBack: () => void,
}

export const Bookmarks = ({
  hooks,
  onPokemonClick,
  onNavigateBack,
}: Props): JSX.Element => {
  const { getAll, loading } = useBookmark()

  const { data } = hooks.usePokemons(getAll(), { enabled: !loading })

  return (
    <Container>
      <Header
        title="Bookmarks"
        onNavigateBack={onNavigateBack}
        showBackButton
      />
      <PokemonList
        items={data || []}
        onItemClick={onPokemonClick}
      />
    </Container>
  )
}

const BookmarksPage = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Bookmarks
      onPokemonClick={id => push(`/pokemon/${id}`)}
      onNavigateBack={() => push('/pokemons')}
      hooks={{ usePokemons }}
    />
  )
}

export default BookmarksPage
