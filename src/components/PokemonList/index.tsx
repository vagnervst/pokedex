import { useEffect } from 'react'

import { Pokemon } from '../../types/pokemon'

import {
  Container,
  SpinnerContainer,
} from './styles'

import PokemonButton from '../PokemonButton'
import Spinner from '../Spinner'

type Props = {
  items: Pokemon[],
  loading?: boolean,
  onItemClick: (id: number) => void,
  onLoadMore?: () => void,
}

const PokemonList = ({
  items,
  loading = false,
  onItemClick,
  onLoadMore = () => ({}),
}: Props): JSX.Element => {
  const scrollEvent = () => {
    const viewportHeight = document.scrollingElement?.clientHeight || 0
    const contentHeight = document.scrollingElement?.scrollHeight || 0

    const maxScrollable = contentHeight - viewportHeight
    const currentlyScrolled = document.scrollingElement?.scrollTop || 0

    if (currentlyScrolled >= maxScrollable) {
      onLoadMore()
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent)

    return () => {
      document.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (
    <Container>
      {loading
      ? (
        <SpinnerContainer>
          <Spinner mode="dark" r={50} />
        </SpinnerContainer>
      ) : (
        items.map(({ id, picture, name, types }) => (
          <PokemonButton
            key={id}
            id={id}
            picture={picture}
            types={types}
            name={name}
            onClick={onItemClick}
          />
        ))
      )}
    </Container>
  )
}

export default PokemonList
