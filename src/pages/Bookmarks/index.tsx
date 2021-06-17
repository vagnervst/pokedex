import { useHistory } from 'react-router'

import PokemonList from '../../components/PokemonList'

import useBookmark from '../../hooks/useBookmark'
import { usePokemons } from '../../hooks/usePokemons'

import {
  LayoutContent,
  LayoutHeader,
  Layout,
} from '../Layout'

const isEmpty = (list: unknown[]) => list.length === 0

type Props = {
  hooks: {
    useBookmark: typeof useBookmark,
    usePokemons: typeof usePokemons,
  },
  onPokemonClick: (id: number) => void,
  onNavigateBack: () => void,
}

export const Bookmarks = ({
  hooks,
  onPokemonClick,
  onNavigateBack,
}: Props): JSX.Element => {
  const { getAll, loading: bookmarksLoading } = hooks.useBookmark()
  const bookmarkIds = getAll()

  const {
    isPreviousData,
    isLoading: requestLoading,
    data,
    fetchNextPage,
  } = hooks.usePokemons(
    '',
    bookmarkIds,
    { enabled: !bookmarksLoading && !isEmpty(bookmarkIds) }
  )

  const pokemons = !isPreviousData && data && !isEmpty(bookmarkIds)
    ? data.pages.map(({ data }) => data)
    : []

  return (
    <Layout>
      <LayoutHeader
        title="Bookmarks"
        showBackButton
        onNavigateBack={onNavigateBack}
      />
      <LayoutContent>
        <PokemonList
          items={pokemons.flat()}
          loading={bookmarksLoading || requestLoading}
          onItemClick={onPokemonClick}
          onLoadMore={fetchNextPage}
        />
      </LayoutContent>
    </Layout>
  )
}

const BookmarksPage = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Bookmarks
      onPokemonClick={id => push(`/pokemons/${id}`)}
      onNavigateBack={() => push('/pokemons')}
      hooks={{ useBookmark, usePokemons }}
    />
  )
}

export default BookmarksPage
