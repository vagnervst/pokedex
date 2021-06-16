import {
  AttributeList,
  Container,
  FlexContainer,
  Identifier,
  ImageContainer,
  PokemonName,
} from './styles'

import { Type } from '../../types/pokemon'

import Badge from '../Badge'
import Image from '../Image'

type Props = {
  id: number,
  name: string,
  onClick: (id: number) => void,
  picture: string,
  types: Type[],
}

const getPrimaryType = (types: Type[]) => {
  const type = types.find(({ slot }) => slot === 1)

  return type?.type.name || ''
}

const PokemonButton = ({
  id,
  name,
  onClick,
  picture,
  types = [],
}: Props): JSX.Element => (
  <Container color={getPrimaryType(types)} role="button" onClick={() => onClick(id)}>
    <ImageContainer>
      <Image
        alt={name}
        width={64}
        height={64}
        src={picture}
      />
    </ImageContainer>
    <FlexContainer>
      <PokemonName>{name}</PokemonName>
      <AttributeList>
        {types.map(({ type }) => (
          <Badge size="md" key={type.name}>{type.name}</Badge>
        ))}
      </AttributeList>
    </FlexContainer>
    <Identifier>
      <span>#{String(id).padStart(3, '0')}</span>
    </Identifier>
  </Container>
)

export default PokemonButton
