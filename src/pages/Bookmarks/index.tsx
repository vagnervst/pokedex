import { UseQueryOptions, UseQueryResult } from 'react-query'
import { useHistory } from 'react-router'

import { PokemonType } from '../../types/pokemon'

import PokemonList from '../../components/PokemonList'

import useBookmark from '../../hooks/useBookmark'
import usePokemons from '../../hooks/usePokemons'

type Props = {
  hooks: {
    usePokemons: (ids: number[], opts: UseQueryOptions<PokemonType[]>) =>
      UseQueryResult<PokemonType[]>|Partial<UseQueryResult<PokemonType[]>>
  },
  onPokemonClick: (id: number) => void
}

export const Bookmarks = ({
  hooks,
  onPokemonClick,
}: Props): JSX.Element => {
  const { getAll, loading } = useBookmark()

  const { data } = hooks.usePokemons(getAll(), { enabled: !loading })

  return (
    <PokemonList
      items={data || []}
      onItemClick={onPokemonClick}
    />
  )
}

const BookmarksPage = (): JSX.Element => {
  const { push } = useHistory()

  const handlePokemonClick = (id: number) => {
    push(`/pokemon/${id}`)
  }

  return (
    <Bookmarks
      onPokemonClick={handlePokemonClick}
      hooks={{ usePokemons }}
    />
  )
}

export default BookmarksPage
