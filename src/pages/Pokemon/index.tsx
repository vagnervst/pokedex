import { UseQueryResult } from 'react-query'
import { useHistory, useParams } from 'react-router'

import Badge from '../../components/Badge'
import IconButton from '../../components/IconButton'
import ArrowBack from '../../components/ArrowBack'

import type { PokemonDetails } from '../../types/pokemon'

import { ReactComponent as BookmarkIcon } from './bookmark.svg'
import { ReactComponent as BookmarkedIcon } from './bookmarked.svg'
import { statLabels } from './labels'
import usePokemon from './hooks/usePokemon'
import useBookmark from '../../hooks/useBookmark'

import {
  Attribute,
  AttributeList,
  BookmarkContainer,
  Container,
  Header,
  HeaderContent,
  Id,
  Main,
  Name,
  Picture,
  TypesList,
} from './styles'

type Props = {
  pokemonId: number,
  onBackClick: () => void,
  hooks: {
    usePokemon: (id: number) =>
      UseQueryResult<PokemonDetails> |
      Partial<UseQueryResult<PokemonDetails>>,
  },
}

export const Pokemon = (
  { pokemonId, onBackClick, hooks }: Props
): JSX.Element => {
  const { data } = hooks.usePokemon(pokemonId)
  const { get, add, remove } = useBookmark()

  const bookmarked = !!get(pokemonId)

  const BookmarkStateIcon = bookmarked ? BookmarkedIcon : BookmarkIcon

  const handleBookmark = () => {
    const newBookmarkState = !bookmarked

    if (newBookmarkState) {
      add(pokemonId)
    } else {
      remove(pokemonId)
    }
  }

  return (
    <Container>
      <Header>
        <ArrowBack onClick={onBackClick} />
        <BookmarkContainer>
          <IconButton
            ariaLabel="Bookmark Pokémon"
            onClick={handleBookmark}
            icon={<BookmarkStateIcon width={32} height={32} />}
          />
        </BookmarkContainer>
        <HeaderContent>
          <Id>#{String(data && data.id).padStart(3, '0')}</Id>
          <Name>{data && data.name}</Name>
          <Picture src={data && data.picture} />
        </HeaderContent>
      </Header>
      <Main>
        <TypesList>
          {data && data.types.map(({ slot, type }) => (
            <Badge aria-label={type.name} key={slot}>{type.name}</Badge>
          ))}
        </TypesList>
        <AttributeList>
          {data && data.stats.map(({ value, stat }) => (
            <Attribute key={stat.name} aria-label={stat.name}>
              <span>{statLabels[stat.name]}</span>
              <span>{value}</span>
            </Attribute>
          ))}
        </AttributeList>
      </Main>
    </Container>
  )
}

const PokemonPage = (): JSX.Element | null => {
  const { id } = useParams<{ id: string }>()
  const { replace } = useHistory()

  const numberId = Number.parseInt(id, 10)

  if (Number.isNaN(numberId)) {
    replace('/pokemon')
    return null
  }

  return (
    <Pokemon
      pokemonId={numberId}
      onBackClick={() => replace('/pokemon')}
      hooks={{ usePokemon }}
    />
  )
}

export default PokemonPage
