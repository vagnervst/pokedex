import { Container } from './styles'

import type { PokemonType } from '../../types/pokemon'

import PokemonButton from '../PokemonButton'

type Props = {
  items: PokemonType[],
  onItemClick: (id: number) => void,
}

const PokemonList = ({
  items,
  onItemClick,
}: Props): JSX.Element => (
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

export default PokemonList
