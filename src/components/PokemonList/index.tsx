import { useEffect } from 'react'

import type { PokemonType } from '../../types/pokemon'

import { Container } from './styles'

import PokemonButton from '../PokemonButton'

type Props = {
  items: PokemonType[],
  onItemClick: (id: number) => void,
  onLoadMore?: () => void,
}

const PokemonList = ({
  items,
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
      {items.map(({ id, picture, name }) => (
        <PokemonButton
          key={id}
          id={id}
          picture={picture}
          name={name}
          onClick={onItemClick}
        />
      ))}
    </Container>
  )
}

export default PokemonList
