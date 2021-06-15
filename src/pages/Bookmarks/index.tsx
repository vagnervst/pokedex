import { useHistory } from 'react-router'

import Header from '../../components/Header'
import PokemonList from '../../components/PokemonList'

import useBookmark from '../../hooks/useBookmark'
import usePokemons, { usePokemonsType } from '../../hooks/usePokemons'

import { Container } from './styles'

type Props = {
  hooks: { usePokemons: usePokemonsType },
  onPokemonClick: (id: number) => void,
  onNavigateBack: () => void,
}

export const Bookmarks = ({
  hooks,
  onPokemonClick,
  onNavigateBack,
}: Props): JSX.Element => {
  const { getAll, loading } = useBookmark()

  const { data, fetchNextPage } = hooks.usePokemons(
    '',
    getAll(),
    { enabled: !loading }
  )

  const pokemons = data
    ? data.pages.map(({ data }) => data)
    : []

  return (
    <Container>
      <Header
        title="Bookmarks"
        onNavigateBack={onNavigateBack}
        showBackButton
      />
      <PokemonList
        items={pokemons.flat()}
        onItemClick={onPokemonClick}
        onLoadMore={fetchNextPage}
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
